import { Request, Response, NextFunction } from "express";
<<<<<<< HEAD
import { sign, verify, SignOptions } from "jsonwebtoken";
import { compare } from "bcrypt";
import prisma from "../../config/prisma";
import { usuarios } from "@prisma/client";
import {statusCodes} from "../../utils/constants/statusCode"
import {PermissionError} from "../../errors/PermissionError"
import { InvalidParamError } from "../../errors/InvalidParamError";
import {LoginError} from "../../errors/LoginError"
import { TokenError } from "../../errors/TokenError";
import { QueryError } from "../../errors/QueryError";
import { NotAuthorizedError } from "../../errors/NotAuthorizedError";

interface JwtPayload {
  id: number;
  role: string;
  nome: string;
}

function generateJWT(user: usuarios, res: Response): void {
  const body: JwtPayload = {
    id: user.id,
    role: user.privilegios,
    nome: user.nome,
  };

  const secretKey = process.env.SECRET_KEY;
  if (!secretKey) {
    console.error("ERRO CRÍTICO: A variável de ambiente SECRET_KEY para JWT não foi definida.");
    throw new QueryError("Erro interno no servidor.");
  }

  const expiresInSeconds = 3600; 

  const signOptions: SignOptions = {
    expiresIn: expiresInSeconds, 
  };

  const token = sign({ user: body }, secretKey, signOptions);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
  });
}

export async function login(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new InvalidParamError("Email e senha são obrigatórios.");
    }

    const user = await prisma.usuarios.findUnique({
      where: { email },
    });

    if (!user) {
      throw new LoginError("Email e/ou senha incorretos!");
    }

    const isPasswordMatching = await compare(password, user.senha);

    if (!isPasswordMatching) {
      throw new LoginError("Email e/ou senha incorretos!");
    }

    generateJWT(user, res);

    res.status(statusCodes.SUCESS).json({
      message: "Login realizado com sucesso!",
      user: { id: user.id, nome: user.nome, privilegios: user.privilegios },
    });
  } catch (error) {
    next(error);
  }
}

export function verifyJWT(req: Request, res: Response, next: NextFunction): void {
  const token = req.cookies.jwt;
  try{

  if (!token) {
    throw new TokenError("Acesso negado. Nenhum token foi fornecido.");
  }

  const secretKey = process.env.SECRET_KEY;

  if (!secretKey) {
      throw new QueryError("Erro interno: A chave secreta do servidor não está configurada.");
  }

    const decoded = verify(token, secretKey) as { user: JwtPayload };
    req.user = decoded.user; 

    next();
  } catch (error) {
    next(error);
  }
}

export function checkRole(allowedRoles: Array<string>) {
  return (req: Request, res: Response, next: NextFunction): void => {
    try {
    if (!req.user || !allowedRoles.includes(req.user.role)) {
      throw new PermissionError("Acesso proibido. Você não tem permissão para executar esta ação.");
      return;
    }
    next();
  } catch (error) {
    next(error);
  }
  };
}

/* export function checkMusicOwnerShipOrAdmin(req: Request, res: Response, next: NextFunction) {
  try{
    const user = req.user;

    if (!user) {
      throw new NotAuthorizedError("Usuário não autenticado.");
    }

    if (user?.role === 'admin') {
      return next();
    }
    const music = await 
  
  next();
  } catch (error) {
    next(error);
  }
}*/
=======
import jwt from "jsonwebtoken";

// Interface para o payload do JWT
interface JwtPayload {
  id: number;
  privilegio: "USER" | "ADMIN";
}

// Extende o Request do Express para incluir o usuário autenticado
export interface AuthRequest extends Request {
  user?: JwtPayload;
}

// Middleware de autenticação
export const autenticar = (req: AuthRequest, res: Response, next: NextFunction) => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		return res.status(401).json({ erro: "Token não fornecido" });
	}

	const token = authHeader.split(" ")[1]; // Bearer <token>

	if (!token) {
		return res.status(401).json({ erro: "Token inválido" });
	}

	try {
		const secret = process.env.JWT_SECRET || "segredo"; // use variável de ambiente em produção
		const decoded = jwt.verify(token, secret) as JwtPayload;
		req.user = decoded; // adiciona dados do usuário no request
		next(); // continua para a rota
	} catch (error: unknown) {
		console.error(error); // usado para depuração
		return res.status(401).json({ erro: "Token inválido ou expirado" });
	}
};
>>>>>>> 9344514da9813c163fc65f0c6b8228ce14b9389e
