
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model usuarios
 * 
 */
export type usuarios = $Result.DefaultSelection<Prisma.$usuariosPayload>
/**
 * Model Artista
 * 
 */
export type Artista = $Result.DefaultSelection<Prisma.$ArtistaPayload>
/**
 * Model Musica
 * 
 */
export type Musica = $Result.DefaultSelection<Prisma.$MusicaPayload>
/**
 * Model Reproducao
 * 
 */
export type Reproducao = $Result.DefaultSelection<Prisma.$ReproducaoPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const TipoPrivilegio: {
  comum: 'comum',
  premium: 'premium',
  admin: 'admin'
};

export type TipoPrivilegio = (typeof TipoPrivilegio)[keyof typeof TipoPrivilegio]

}

export type TipoPrivilegio = $Enums.TipoPrivilegio

export const TipoPrivilegio: typeof $Enums.TipoPrivilegio

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuarios.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuarios.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuarios`: Exposes CRUD operations for the **usuarios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuarios.findMany()
    * ```
    */
  get usuarios(): Prisma.usuariosDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.artista`: Exposes CRUD operations for the **Artista** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artistas
    * const artistas = await prisma.artista.findMany()
    * ```
    */
  get artista(): Prisma.ArtistaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.musica`: Exposes CRUD operations for the **Musica** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Musicas
    * const musicas = await prisma.musica.findMany()
    * ```
    */
  get musica(): Prisma.MusicaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reproducao`: Exposes CRUD operations for the **Reproducao** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reproducaos
    * const reproducaos = await prisma.reproducao.findMany()
    * ```
    */
  get reproducao(): Prisma.ReproducaoDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.13.0
   * Query Engine version: 361e86d0ea4987e9f53a565309b3eed797a6bcbd
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    usuarios: 'usuarios',
    Artista: 'Artista',
    Musica: 'Musica',
    Reproducao: 'Reproducao'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuarios" | "artista" | "musica" | "reproducao"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      usuarios: {
        payload: Prisma.$usuariosPayload<ExtArgs>
        fields: Prisma.usuariosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usuariosFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usuariosFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findFirst: {
            args: Prisma.usuariosFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usuariosFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          findMany: {
            args: Prisma.usuariosFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          create: {
            args: Prisma.usuariosCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          createMany: {
            args: Prisma.usuariosCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usuariosCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          delete: {
            args: Prisma.usuariosDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          update: {
            args: Prisma.usuariosUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          deleteMany: {
            args: Prisma.usuariosDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usuariosUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usuariosUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>[]
          }
          upsert: {
            args: Prisma.usuariosUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usuariosPayload>
          }
          aggregate: {
            args: Prisma.UsuariosAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuarios>
          }
          groupBy: {
            args: Prisma.usuariosGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuariosGroupByOutputType>[]
          }
          count: {
            args: Prisma.usuariosCountArgs<ExtArgs>
            result: $Utils.Optional<UsuariosCountAggregateOutputType> | number
          }
        }
      }
      Artista: {
        payload: Prisma.$ArtistaPayload<ExtArgs>
        fields: Prisma.ArtistaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findFirst: {
            args: Prisma.ArtistaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          findMany: {
            args: Prisma.ArtistaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          create: {
            args: Prisma.ArtistaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          createMany: {
            args: Prisma.ArtistaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ArtistaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          delete: {
            args: Prisma.ArtistaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          update: {
            args: Prisma.ArtistaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          deleteMany: {
            args: Prisma.ArtistaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ArtistaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>[]
          }
          upsert: {
            args: Prisma.ArtistaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ArtistaPayload>
          }
          aggregate: {
            args: Prisma.ArtistaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArtista>
          }
          groupBy: {
            args: Prisma.ArtistaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ArtistaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArtistaCountArgs<ExtArgs>
            result: $Utils.Optional<ArtistaCountAggregateOutputType> | number
          }
        }
      }
      Musica: {
        payload: Prisma.$MusicaPayload<ExtArgs>
        fields: Prisma.MusicaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          findFirst: {
            args: Prisma.MusicaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          findMany: {
            args: Prisma.MusicaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>[]
          }
          create: {
            args: Prisma.MusicaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          createMany: {
            args: Prisma.MusicaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>[]
          }
          delete: {
            args: Prisma.MusicaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          update: {
            args: Prisma.MusicaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          deleteMany: {
            args: Prisma.MusicaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MusicaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>[]
          }
          upsert: {
            args: Prisma.MusicaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicaPayload>
          }
          aggregate: {
            args: Prisma.MusicaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusica>
          }
          groupBy: {
            args: Prisma.MusicaGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicaGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicaCountArgs<ExtArgs>
            result: $Utils.Optional<MusicaCountAggregateOutputType> | number
          }
        }
      }
      Reproducao: {
        payload: Prisma.$ReproducaoPayload<ExtArgs>
        fields: Prisma.ReproducaoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReproducaoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReproducaoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          findFirst: {
            args: Prisma.ReproducaoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReproducaoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          findMany: {
            args: Prisma.ReproducaoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>[]
          }
          create: {
            args: Prisma.ReproducaoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          createMany: {
            args: Prisma.ReproducaoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReproducaoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>[]
          }
          delete: {
            args: Prisma.ReproducaoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          update: {
            args: Prisma.ReproducaoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          deleteMany: {
            args: Prisma.ReproducaoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReproducaoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReproducaoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>[]
          }
          upsert: {
            args: Prisma.ReproducaoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReproducaoPayload>
          }
          aggregate: {
            args: Prisma.ReproducaoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReproducao>
          }
          groupBy: {
            args: Prisma.ReproducaoGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReproducaoGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReproducaoCountArgs<ExtArgs>
            result: $Utils.Optional<ReproducaoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuarios?: usuariosOmit
    artista?: ArtistaOmit
    musica?: MusicaOmit
    reproducao?: ReproducaoOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuariosCountOutputType
   */

  export type UsuariosCountOutputType = {
    reprodicoes: number
  }

  export type UsuariosCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reprodicoes?: boolean | UsuariosCountOutputTypeCountReprodicoesArgs
  }

  // Custom InputTypes
  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuariosCountOutputType
     */
    select?: UsuariosCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuariosCountOutputType without action
   */
  export type UsuariosCountOutputTypeCountReprodicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReproducaoWhereInput
  }


  /**
   * Count Type ArtistaCountOutputType
   */

  export type ArtistaCountOutputType = {
    musicas: number
  }

  export type ArtistaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicas?: boolean | ArtistaCountOutputTypeCountMusicasArgs
  }

  // Custom InputTypes
  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistaCountOutputType
     */
    select?: ArtistaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ArtistaCountOutputType without action
   */
  export type ArtistaCountOutputTypeCountMusicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicaWhereInput
  }


  /**
   * Count Type MusicaCountOutputType
   */

  export type MusicaCountOutputType = {
    reproducoes: number
  }

  export type MusicaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reproducoes?: boolean | MusicaCountOutputTypeCountReproducoesArgs
  }

  // Custom InputTypes
  /**
   * MusicaCountOutputType without action
   */
  export type MusicaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicaCountOutputType
     */
    select?: MusicaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicaCountOutputType without action
   */
  export type MusicaCountOutputTypeCountReproducoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReproducaoWhereInput
  }


  /**
   * Models
   */

  /**
   * Model usuarios
   */

  export type AggregateUsuarios = {
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  export type UsuariosAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuariosSumAggregateOutputType = {
    id: number | null
  }

  export type UsuariosMinAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    photo: string | null
    privilegios: $Enums.TipoPrivilegio | null
  }

  export type UsuariosMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    email: string | null
    photo: string | null
    privilegios: $Enums.TipoPrivilegio | null
  }

  export type UsuariosCountAggregateOutputType = {
    id: number
    nome: number
    email: number
    photo: number
    privilegios: number
    _all: number
  }


  export type UsuariosAvgAggregateInputType = {
    id?: true
  }

  export type UsuariosSumAggregateInputType = {
    id?: true
  }

  export type UsuariosMinAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    photo?: true
    privilegios?: true
  }

  export type UsuariosMaxAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    photo?: true
    privilegios?: true
  }

  export type UsuariosCountAggregateInputType = {
    id?: true
    nome?: true
    email?: true
    photo?: true
    privilegios?: true
    _all?: true
  }

  export type UsuariosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to aggregate.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned usuarios
    **/
    _count?: true | UsuariosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuariosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuariosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuariosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuariosMaxAggregateInputType
  }

  export type GetUsuariosAggregateType<T extends UsuariosAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuarios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuarios[P]>
      : GetScalarType<T[P], AggregateUsuarios[P]>
  }




  export type usuariosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usuariosWhereInput
    orderBy?: usuariosOrderByWithAggregationInput | usuariosOrderByWithAggregationInput[]
    by: UsuariosScalarFieldEnum[] | UsuariosScalarFieldEnum
    having?: usuariosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuariosCountAggregateInputType | true
    _avg?: UsuariosAvgAggregateInputType
    _sum?: UsuariosSumAggregateInputType
    _min?: UsuariosMinAggregateInputType
    _max?: UsuariosMaxAggregateInputType
  }

  export type UsuariosGroupByOutputType = {
    id: number
    nome: string
    email: string
    photo: string | null
    privilegios: $Enums.TipoPrivilegio
    _count: UsuariosCountAggregateOutputType | null
    _avg: UsuariosAvgAggregateOutputType | null
    _sum: UsuariosSumAggregateOutputType | null
    _min: UsuariosMinAggregateOutputType | null
    _max: UsuariosMaxAggregateOutputType | null
  }

  type GetUsuariosGroupByPayload<T extends usuariosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuariosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuariosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
            : GetScalarType<T[P], UsuariosGroupByOutputType[P]>
        }
      >
    >


  export type usuariosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    photo?: boolean
    privilegios?: boolean
    reprodicoes?: boolean | usuarios$reprodicoesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    photo?: boolean
    privilegios?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    email?: boolean
    photo?: boolean
    privilegios?: boolean
  }, ExtArgs["result"]["usuarios"]>

  export type usuariosSelectScalar = {
    id?: boolean
    nome?: boolean
    email?: boolean
    photo?: boolean
    privilegios?: boolean
  }

  export type usuariosOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "email" | "photo" | "privilegios", ExtArgs["result"]["usuarios"]>
  export type usuariosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reprodicoes?: boolean | usuarios$reprodicoesArgs<ExtArgs>
    _count?: boolean | UsuariosCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usuariosIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usuariosIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usuariosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "usuarios"
    objects: {
      reprodicoes: Prisma.$ReproducaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      email: string
      photo: string | null
      privilegios: $Enums.TipoPrivilegio
    }, ExtArgs["result"]["usuarios"]>
    composites: {}
  }

  type usuariosGetPayload<S extends boolean | null | undefined | usuariosDefaultArgs> = $Result.GetResult<Prisma.$usuariosPayload, S>

  type usuariosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usuariosFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuariosCountAggregateInputType | true
    }

  export interface usuariosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['usuarios'], meta: { name: 'usuarios' } }
    /**
     * Find zero or one Usuarios that matches the filter.
     * @param {usuariosFindUniqueArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usuariosFindUniqueArgs>(args: SelectSubset<T, usuariosFindUniqueArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuarios that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usuariosFindUniqueOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usuariosFindUniqueOrThrowArgs>(args: SelectSubset<T, usuariosFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usuariosFindFirstArgs>(args?: SelectSubset<T, usuariosFindFirstArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuarios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindFirstOrThrowArgs} args - Arguments to find a Usuarios
     * @example
     * // Get one Usuarios
     * const usuarios = await prisma.usuarios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usuariosFindFirstOrThrowArgs>(args?: SelectSubset<T, usuariosFindFirstOrThrowArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuarios.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuarios.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usuariosFindManyArgs>(args?: SelectSubset<T, usuariosFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuarios.
     * @param {usuariosCreateArgs} args - Arguments to create a Usuarios.
     * @example
     * // Create one Usuarios
     * const Usuarios = await prisma.usuarios.create({
     *   data: {
     *     // ... data to create a Usuarios
     *   }
     * })
     * 
     */
    create<T extends usuariosCreateArgs>(args: SelectSubset<T, usuariosCreateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {usuariosCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usuariosCreateManyArgs>(args?: SelectSubset<T, usuariosCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {usuariosCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuarios = await prisma.usuarios.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usuariosCreateManyAndReturnArgs>(args?: SelectSubset<T, usuariosCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuarios.
     * @param {usuariosDeleteArgs} args - Arguments to delete one Usuarios.
     * @example
     * // Delete one Usuarios
     * const Usuarios = await prisma.usuarios.delete({
     *   where: {
     *     // ... filter to delete one Usuarios
     *   }
     * })
     * 
     */
    delete<T extends usuariosDeleteArgs>(args: SelectSubset<T, usuariosDeleteArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuarios.
     * @param {usuariosUpdateArgs} args - Arguments to update one Usuarios.
     * @example
     * // Update one Usuarios
     * const usuarios = await prisma.usuarios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usuariosUpdateArgs>(args: SelectSubset<T, usuariosUpdateArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {usuariosDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuarios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usuariosDeleteManyArgs>(args?: SelectSubset<T, usuariosDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usuariosUpdateManyArgs>(args: SelectSubset<T, usuariosUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {usuariosUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuarios = await prisma.usuarios.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuariosWithIdOnly = await prisma.usuarios.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usuariosUpdateManyAndReturnArgs>(args: SelectSubset<T, usuariosUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuarios.
     * @param {usuariosUpsertArgs} args - Arguments to update or create a Usuarios.
     * @example
     * // Update or create a Usuarios
     * const usuarios = await prisma.usuarios.upsert({
     *   create: {
     *     // ... data to create a Usuarios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuarios we want to update
     *   }
     * })
     */
    upsert<T extends usuariosUpsertArgs>(args: SelectSubset<T, usuariosUpsertArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuarios.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends usuariosCountArgs>(
      args?: Subset<T, usuariosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuariosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuariosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuariosAggregateArgs>(args: Subset<T, UsuariosAggregateArgs>): Prisma.PrismaPromise<GetUsuariosAggregateType<T>>

    /**
     * Group by Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usuariosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usuariosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usuariosGroupByArgs['orderBy'] }
        : { orderBy?: usuariosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usuariosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuariosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the usuarios model
   */
  readonly fields: usuariosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for usuarios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usuariosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reprodicoes<T extends usuarios$reprodicoesArgs<ExtArgs> = {}>(args?: Subset<T, usuarios$reprodicoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the usuarios model
   */
  interface usuariosFieldRefs {
    readonly id: FieldRef<"usuarios", 'Int'>
    readonly nome: FieldRef<"usuarios", 'String'>
    readonly email: FieldRef<"usuarios", 'String'>
    readonly photo: FieldRef<"usuarios", 'String'>
    readonly privilegios: FieldRef<"usuarios", 'TipoPrivilegio'>
  }
    

  // Custom InputTypes
  /**
   * usuarios findUnique
   */
  export type usuariosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findUniqueOrThrow
   */
  export type usuariosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios findFirst
   */
  export type usuariosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findFirstOrThrow
   */
  export type usuariosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of usuarios.
     */
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios findMany
   */
  export type usuariosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter, which usuarios to fetch.
     */
    where?: usuariosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of usuarios to fetch.
     */
    orderBy?: usuariosOrderByWithRelationInput | usuariosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing usuarios.
     */
    cursor?: usuariosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` usuarios.
     */
    skip?: number
    distinct?: UsuariosScalarFieldEnum | UsuariosScalarFieldEnum[]
  }

  /**
   * usuarios create
   */
  export type usuariosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to create a usuarios.
     */
    data: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
  }

  /**
   * usuarios createMany
   */
  export type usuariosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios createManyAndReturn
   */
  export type usuariosCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to create many usuarios.
     */
    data: usuariosCreateManyInput | usuariosCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * usuarios update
   */
  export type usuariosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The data needed to update a usuarios.
     */
    data: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
    /**
     * Choose, which usuarios to update.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios updateMany
   */
  export type usuariosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios updateManyAndReturn
   */
  export type usuariosUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * The data used to update usuarios.
     */
    data: XOR<usuariosUpdateManyMutationInput, usuariosUncheckedUpdateManyInput>
    /**
     * Filter which usuarios to update
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to update.
     */
    limit?: number
  }

  /**
   * usuarios upsert
   */
  export type usuariosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * The filter to search for the usuarios to update in case it exists.
     */
    where: usuariosWhereUniqueInput
    /**
     * In case the usuarios found by the `where` argument doesn't exist, create a new usuarios with this data.
     */
    create: XOR<usuariosCreateInput, usuariosUncheckedCreateInput>
    /**
     * In case the usuarios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usuariosUpdateInput, usuariosUncheckedUpdateInput>
  }

  /**
   * usuarios delete
   */
  export type usuariosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
    /**
     * Filter which usuarios to delete.
     */
    where: usuariosWhereUniqueInput
  }

  /**
   * usuarios deleteMany
   */
  export type usuariosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which usuarios to delete
     */
    where?: usuariosWhereInput
    /**
     * Limit how many usuarios to delete.
     */
    limit?: number
  }

  /**
   * usuarios.reprodicoes
   */
  export type usuarios$reprodicoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    where?: ReproducaoWhereInput
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    cursor?: ReproducaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReproducaoScalarFieldEnum | ReproducaoScalarFieldEnum[]
  }

  /**
   * usuarios without action
   */
  export type usuariosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the usuarios
     */
    select?: usuariosSelect<ExtArgs> | null
    /**
     * Omit specific fields from the usuarios
     */
    omit?: usuariosOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usuariosInclude<ExtArgs> | null
  }


  /**
   * Model Artista
   */

  export type AggregateArtista = {
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  export type ArtistaAvgAggregateOutputType = {
    id: number | null
    numero_streams: number | null
  }

  export type ArtistaSumAggregateOutputType = {
    id: number | null
    numero_streams: number | null
  }

  export type ArtistaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    foto: string | null
    numero_streams: number | null
  }

  export type ArtistaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    foto: string | null
    numero_streams: number | null
  }

  export type ArtistaCountAggregateOutputType = {
    id: number
    nome: number
    foto: number
    numero_streams: number
    _all: number
  }


  export type ArtistaAvgAggregateInputType = {
    id?: true
    numero_streams?: true
  }

  export type ArtistaSumAggregateInputType = {
    id?: true
    numero_streams?: true
  }

  export type ArtistaMinAggregateInputType = {
    id?: true
    nome?: true
    foto?: true
    numero_streams?: true
  }

  export type ArtistaMaxAggregateInputType = {
    id?: true
    nome?: true
    foto?: true
    numero_streams?: true
  }

  export type ArtistaCountAggregateInputType = {
    id?: true
    nome?: true
    foto?: true
    numero_streams?: true
    _all?: true
  }

  export type ArtistaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artista to aggregate.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artistas
    **/
    _count?: true | ArtistaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistaMaxAggregateInputType
  }

  export type GetArtistaAggregateType<T extends ArtistaAggregateArgs> = {
        [P in keyof T & keyof AggregateArtista]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtista[P]>
      : GetScalarType<T[P], AggregateArtista[P]>
  }




  export type ArtistaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistaWhereInput
    orderBy?: ArtistaOrderByWithAggregationInput | ArtistaOrderByWithAggregationInput[]
    by: ArtistaScalarFieldEnum[] | ArtistaScalarFieldEnum
    having?: ArtistaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistaCountAggregateInputType | true
    _avg?: ArtistaAvgAggregateInputType
    _sum?: ArtistaSumAggregateInputType
    _min?: ArtistaMinAggregateInputType
    _max?: ArtistaMaxAggregateInputType
  }

  export type ArtistaGroupByOutputType = {
    id: number
    nome: string
    foto: string | null
    numero_streams: number
    _count: ArtistaCountAggregateOutputType | null
    _avg: ArtistaAvgAggregateOutputType | null
    _sum: ArtistaSumAggregateOutputType | null
    _min: ArtistaMinAggregateOutputType | null
    _max: ArtistaMaxAggregateOutputType | null
  }

  type GetArtistaGroupByPayload<T extends ArtistaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistaGroupByOutputType[P]>
        }
      >
    >


  export type ArtistaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto?: boolean
    numero_streams?: boolean
    musicas?: boolean | Artista$musicasArgs<ExtArgs>
    _count?: boolean | ArtistaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto?: boolean
    numero_streams?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    foto?: boolean
    numero_streams?: boolean
  }, ExtArgs["result"]["artista"]>

  export type ArtistaSelectScalar = {
    id?: boolean
    nome?: boolean
    foto?: boolean
    numero_streams?: boolean
  }

  export type ArtistaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "foto" | "numero_streams", ExtArgs["result"]["artista"]>
  export type ArtistaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    musicas?: boolean | Artista$musicasArgs<ExtArgs>
    _count?: boolean | ArtistaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ArtistaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ArtistaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ArtistaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artista"
    objects: {
      musicas: Prisma.$MusicaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      foto: string | null
      numero_streams: number
    }, ExtArgs["result"]["artista"]>
    composites: {}
  }

  type ArtistaGetPayload<S extends boolean | null | undefined | ArtistaDefaultArgs> = $Result.GetResult<Prisma.$ArtistaPayload, S>

  type ArtistaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ArtistaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ArtistaCountAggregateInputType | true
    }

  export interface ArtistaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artista'], meta: { name: 'Artista' } }
    /**
     * Find zero or one Artista that matches the filter.
     * @param {ArtistaFindUniqueArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ArtistaFindUniqueArgs>(args: SelectSubset<T, ArtistaFindUniqueArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Artista that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ArtistaFindUniqueOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ArtistaFindUniqueOrThrowArgs>(args: SelectSubset<T, ArtistaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ArtistaFindFirstArgs>(args?: SelectSubset<T, ArtistaFindFirstArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Artista that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindFirstOrThrowArgs} args - Arguments to find a Artista
     * @example
     * // Get one Artista
     * const artista = await prisma.artista.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ArtistaFindFirstOrThrowArgs>(args?: SelectSubset<T, ArtistaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Artistas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artistas
     * const artistas = await prisma.artista.findMany()
     * 
     * // Get first 10 Artistas
     * const artistas = await prisma.artista.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistaWithIdOnly = await prisma.artista.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ArtistaFindManyArgs>(args?: SelectSubset<T, ArtistaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Artista.
     * @param {ArtistaCreateArgs} args - Arguments to create a Artista.
     * @example
     * // Create one Artista
     * const Artista = await prisma.artista.create({
     *   data: {
     *     // ... data to create a Artista
     *   }
     * })
     * 
     */
    create<T extends ArtistaCreateArgs>(args: SelectSubset<T, ArtistaCreateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Artistas.
     * @param {ArtistaCreateManyArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ArtistaCreateManyArgs>(args?: SelectSubset<T, ArtistaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Artistas and returns the data saved in the database.
     * @param {ArtistaCreateManyAndReturnArgs} args - Arguments to create many Artistas.
     * @example
     * // Create many Artistas
     * const artista = await prisma.artista.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ArtistaCreateManyAndReturnArgs>(args?: SelectSubset<T, ArtistaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Artista.
     * @param {ArtistaDeleteArgs} args - Arguments to delete one Artista.
     * @example
     * // Delete one Artista
     * const Artista = await prisma.artista.delete({
     *   where: {
     *     // ... filter to delete one Artista
     *   }
     * })
     * 
     */
    delete<T extends ArtistaDeleteArgs>(args: SelectSubset<T, ArtistaDeleteArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Artista.
     * @param {ArtistaUpdateArgs} args - Arguments to update one Artista.
     * @example
     * // Update one Artista
     * const artista = await prisma.artista.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ArtistaUpdateArgs>(args: SelectSubset<T, ArtistaUpdateArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Artistas.
     * @param {ArtistaDeleteManyArgs} args - Arguments to filter Artistas to delete.
     * @example
     * // Delete a few Artistas
     * const { count } = await prisma.artista.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ArtistaDeleteManyArgs>(args?: SelectSubset<T, ArtistaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ArtistaUpdateManyArgs>(args: SelectSubset<T, ArtistaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artistas and returns the data updated in the database.
     * @param {ArtistaUpdateManyAndReturnArgs} args - Arguments to update many Artistas.
     * @example
     * // Update many Artistas
     * const artista = await prisma.artista.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Artistas and only return the `id`
     * const artistaWithIdOnly = await prisma.artista.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ArtistaUpdateManyAndReturnArgs>(args: SelectSubset<T, ArtistaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Artista.
     * @param {ArtistaUpsertArgs} args - Arguments to update or create a Artista.
     * @example
     * // Update or create a Artista
     * const artista = await prisma.artista.upsert({
     *   create: {
     *     // ... data to create a Artista
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artista we want to update
     *   }
     * })
     */
    upsert<T extends ArtistaUpsertArgs>(args: SelectSubset<T, ArtistaUpsertArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Artistas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaCountArgs} args - Arguments to filter Artistas to count.
     * @example
     * // Count the number of Artistas
     * const count = await prisma.artista.count({
     *   where: {
     *     // ... the filter for the Artistas we want to count
     *   }
     * })
    **/
    count<T extends ArtistaCountArgs>(
      args?: Subset<T, ArtistaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistaAggregateArgs>(args: Subset<T, ArtistaAggregateArgs>): Prisma.PrismaPromise<GetArtistaAggregateType<T>>

    /**
     * Group by Artista.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistaGroupByArgs['orderBy'] }
        : { orderBy?: ArtistaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artista model
   */
  readonly fields: ArtistaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artista.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    musicas<T extends Artista$musicasArgs<ExtArgs> = {}>(args?: Subset<T, Artista$musicasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Artista model
   */
  interface ArtistaFieldRefs {
    readonly id: FieldRef<"Artista", 'Int'>
    readonly nome: FieldRef<"Artista", 'String'>
    readonly foto: FieldRef<"Artista", 'String'>
    readonly numero_streams: FieldRef<"Artista", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Artista findUnique
   */
  export type ArtistaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findUniqueOrThrow
   */
  export type ArtistaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista findFirst
   */
  export type ArtistaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findFirstOrThrow
   */
  export type ArtistaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artista to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artistas.
     */
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista findMany
   */
  export type ArtistaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter, which Artistas to fetch.
     */
    where?: ArtistaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artistas to fetch.
     */
    orderBy?: ArtistaOrderByWithRelationInput | ArtistaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artistas.
     */
    cursor?: ArtistaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artistas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artistas.
     */
    skip?: number
    distinct?: ArtistaScalarFieldEnum | ArtistaScalarFieldEnum[]
  }

  /**
   * Artista create
   */
  export type ArtistaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The data needed to create a Artista.
     */
    data: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
  }

  /**
   * Artista createMany
   */
  export type ArtistaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista createManyAndReturn
   */
  export type ArtistaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to create many Artistas.
     */
    data: ArtistaCreateManyInput | ArtistaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Artista update
   */
  export type ArtistaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The data needed to update a Artista.
     */
    data: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
    /**
     * Choose, which Artista to update.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista updateMany
   */
  export type ArtistaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista updateManyAndReturn
   */
  export type ArtistaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * The data used to update Artistas.
     */
    data: XOR<ArtistaUpdateManyMutationInput, ArtistaUncheckedUpdateManyInput>
    /**
     * Filter which Artistas to update
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to update.
     */
    limit?: number
  }

  /**
   * Artista upsert
   */
  export type ArtistaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * The filter to search for the Artista to update in case it exists.
     */
    where: ArtistaWhereUniqueInput
    /**
     * In case the Artista found by the `where` argument doesn't exist, create a new Artista with this data.
     */
    create: XOR<ArtistaCreateInput, ArtistaUncheckedCreateInput>
    /**
     * In case the Artista was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistaUpdateInput, ArtistaUncheckedUpdateInput>
  }

  /**
   * Artista delete
   */
  export type ArtistaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
    /**
     * Filter which Artista to delete.
     */
    where: ArtistaWhereUniqueInput
  }

  /**
   * Artista deleteMany
   */
  export type ArtistaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artistas to delete
     */
    where?: ArtistaWhereInput
    /**
     * Limit how many Artistas to delete.
     */
    limit?: number
  }

  /**
   * Artista.musicas
   */
  export type Artista$musicasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    where?: MusicaWhereInput
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    cursor?: MusicaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }

  /**
   * Artista without action
   */
  export type ArtistaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artista
     */
    select?: ArtistaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Artista
     */
    omit?: ArtistaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ArtistaInclude<ExtArgs> | null
  }


  /**
   * Model Musica
   */

  export type AggregateMusica = {
    _count: MusicaCountAggregateOutputType | null
    _avg: MusicaAvgAggregateOutputType | null
    _sum: MusicaSumAggregateOutputType | null
    _min: MusicaMinAggregateOutputType | null
    _max: MusicaMaxAggregateOutputType | null
  }

  export type MusicaAvgAggregateOutputType = {
    id: number | null
    artistaId: number | null
  }

  export type MusicaSumAggregateOutputType = {
    id: number | null
    artistaId: number | null
  }

  export type MusicaMinAggregateOutputType = {
    id: number | null
    nome: string | null
    genero: string | null
    album: string | null
    artistaId: number | null
  }

  export type MusicaMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    genero: string | null
    album: string | null
    artistaId: number | null
  }

  export type MusicaCountAggregateOutputType = {
    id: number
    nome: number
    genero: number
    album: number
    artistaId: number
    _all: number
  }


  export type MusicaAvgAggregateInputType = {
    id?: true
    artistaId?: true
  }

  export type MusicaSumAggregateInputType = {
    id?: true
    artistaId?: true
  }

  export type MusicaMinAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    album?: true
    artistaId?: true
  }

  export type MusicaMaxAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    album?: true
    artistaId?: true
  }

  export type MusicaCountAggregateInputType = {
    id?: true
    nome?: true
    genero?: true
    album?: true
    artistaId?: true
    _all?: true
  }

  export type MusicaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musica to aggregate.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Musicas
    **/
    _count?: true | MusicaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicaMaxAggregateInputType
  }

  export type GetMusicaAggregateType<T extends MusicaAggregateArgs> = {
        [P in keyof T & keyof AggregateMusica]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusica[P]>
      : GetScalarType<T[P], AggregateMusica[P]>
  }




  export type MusicaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicaWhereInput
    orderBy?: MusicaOrderByWithAggregationInput | MusicaOrderByWithAggregationInput[]
    by: MusicaScalarFieldEnum[] | MusicaScalarFieldEnum
    having?: MusicaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicaCountAggregateInputType | true
    _avg?: MusicaAvgAggregateInputType
    _sum?: MusicaSumAggregateInputType
    _min?: MusicaMinAggregateInputType
    _max?: MusicaMaxAggregateInputType
  }

  export type MusicaGroupByOutputType = {
    id: number
    nome: string
    genero: string
    album: string
    artistaId: number
    _count: MusicaCountAggregateOutputType | null
    _avg: MusicaAvgAggregateOutputType | null
    _sum: MusicaSumAggregateOutputType | null
    _min: MusicaMinAggregateOutputType | null
    _max: MusicaMaxAggregateOutputType | null
  }

  type GetMusicaGroupByPayload<T extends MusicaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicaGroupByOutputType[P]>
            : GetScalarType<T[P], MusicaGroupByOutputType[P]>
        }
      >
    >


  export type MusicaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    album?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    reproducoes?: boolean | Musica$reproducoesArgs<ExtArgs>
    _count?: boolean | MusicaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musica"]>

  export type MusicaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    album?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musica"]>

  export type MusicaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    genero?: boolean
    album?: boolean
    artistaId?: boolean
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musica"]>

  export type MusicaSelectScalar = {
    id?: boolean
    nome?: boolean
    genero?: boolean
    album?: boolean
    artistaId?: boolean
  }

  export type MusicaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "genero" | "album" | "artistaId", ExtArgs["result"]["musica"]>
  export type MusicaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
    reproducoes?: boolean | Musica$reproducoesArgs<ExtArgs>
    _count?: boolean | MusicaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }
  export type MusicaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artista?: boolean | ArtistaDefaultArgs<ExtArgs>
  }

  export type $MusicaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Musica"
    objects: {
      artista: Prisma.$ArtistaPayload<ExtArgs>
      reproducoes: Prisma.$ReproducaoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      genero: string
      album: string
      artistaId: number
    }, ExtArgs["result"]["musica"]>
    composites: {}
  }

  type MusicaGetPayload<S extends boolean | null | undefined | MusicaDefaultArgs> = $Result.GetResult<Prisma.$MusicaPayload, S>

  type MusicaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MusicaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MusicaCountAggregateInputType | true
    }

  export interface MusicaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Musica'], meta: { name: 'Musica' } }
    /**
     * Find zero or one Musica that matches the filter.
     * @param {MusicaFindUniqueArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicaFindUniqueArgs>(args: SelectSubset<T, MusicaFindUniqueArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Musica that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MusicaFindUniqueOrThrowArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicaFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Musica that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindFirstArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicaFindFirstArgs>(args?: SelectSubset<T, MusicaFindFirstArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Musica that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindFirstOrThrowArgs} args - Arguments to find a Musica
     * @example
     * // Get one Musica
     * const musica = await prisma.musica.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicaFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicaFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Musicas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musicas
     * const musicas = await prisma.musica.findMany()
     * 
     * // Get first 10 Musicas
     * const musicas = await prisma.musica.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicaWithIdOnly = await prisma.musica.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicaFindManyArgs>(args?: SelectSubset<T, MusicaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Musica.
     * @param {MusicaCreateArgs} args - Arguments to create a Musica.
     * @example
     * // Create one Musica
     * const Musica = await prisma.musica.create({
     *   data: {
     *     // ... data to create a Musica
     *   }
     * })
     * 
     */
    create<T extends MusicaCreateArgs>(args: SelectSubset<T, MusicaCreateArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Musicas.
     * @param {MusicaCreateManyArgs} args - Arguments to create many Musicas.
     * @example
     * // Create many Musicas
     * const musica = await prisma.musica.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicaCreateManyArgs>(args?: SelectSubset<T, MusicaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Musicas and returns the data saved in the database.
     * @param {MusicaCreateManyAndReturnArgs} args - Arguments to create many Musicas.
     * @example
     * // Create many Musicas
     * const musica = await prisma.musica.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Musicas and only return the `id`
     * const musicaWithIdOnly = await prisma.musica.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicaCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Musica.
     * @param {MusicaDeleteArgs} args - Arguments to delete one Musica.
     * @example
     * // Delete one Musica
     * const Musica = await prisma.musica.delete({
     *   where: {
     *     // ... filter to delete one Musica
     *   }
     * })
     * 
     */
    delete<T extends MusicaDeleteArgs>(args: SelectSubset<T, MusicaDeleteArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Musica.
     * @param {MusicaUpdateArgs} args - Arguments to update one Musica.
     * @example
     * // Update one Musica
     * const musica = await prisma.musica.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicaUpdateArgs>(args: SelectSubset<T, MusicaUpdateArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Musicas.
     * @param {MusicaDeleteManyArgs} args - Arguments to filter Musicas to delete.
     * @example
     * // Delete a few Musicas
     * const { count } = await prisma.musica.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicaDeleteManyArgs>(args?: SelectSubset<T, MusicaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musicas
     * const musica = await prisma.musica.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicaUpdateManyArgs>(args: SelectSubset<T, MusicaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musicas and returns the data updated in the database.
     * @param {MusicaUpdateManyAndReturnArgs} args - Arguments to update many Musicas.
     * @example
     * // Update many Musicas
     * const musica = await prisma.musica.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Musicas and only return the `id`
     * const musicaWithIdOnly = await prisma.musica.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MusicaUpdateManyAndReturnArgs>(args: SelectSubset<T, MusicaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Musica.
     * @param {MusicaUpsertArgs} args - Arguments to update or create a Musica.
     * @example
     * // Update or create a Musica
     * const musica = await prisma.musica.upsert({
     *   create: {
     *     // ... data to create a Musica
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musica we want to update
     *   }
     * })
     */
    upsert<T extends MusicaUpsertArgs>(args: SelectSubset<T, MusicaUpsertArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Musicas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaCountArgs} args - Arguments to filter Musicas to count.
     * @example
     * // Count the number of Musicas
     * const count = await prisma.musica.count({
     *   where: {
     *     // ... the filter for the Musicas we want to count
     *   }
     * })
    **/
    count<T extends MusicaCountArgs>(
      args?: Subset<T, MusicaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Musica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicaAggregateArgs>(args: Subset<T, MusicaAggregateArgs>): Prisma.PrismaPromise<GetMusicaAggregateType<T>>

    /**
     * Group by Musica.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicaGroupByArgs['orderBy'] }
        : { orderBy?: MusicaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Musica model
   */
  readonly fields: MusicaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Musica.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    artista<T extends ArtistaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistaDefaultArgs<ExtArgs>>): Prisma__ArtistaClient<$Result.GetResult<Prisma.$ArtistaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reproducoes<T extends Musica$reproducoesArgs<ExtArgs> = {}>(args?: Subset<T, Musica$reproducoesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Musica model
   */
  interface MusicaFieldRefs {
    readonly id: FieldRef<"Musica", 'Int'>
    readonly nome: FieldRef<"Musica", 'String'>
    readonly genero: FieldRef<"Musica", 'String'>
    readonly album: FieldRef<"Musica", 'String'>
    readonly artistaId: FieldRef<"Musica", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Musica findUnique
   */
  export type MusicaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where: MusicaWhereUniqueInput
  }

  /**
   * Musica findUniqueOrThrow
   */
  export type MusicaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where: MusicaWhereUniqueInput
  }

  /**
   * Musica findFirst
   */
  export type MusicaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicas.
     */
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }

  /**
   * Musica findFirstOrThrow
   */
  export type MusicaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musica to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicas.
     */
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }

  /**
   * Musica findMany
   */
  export type MusicaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter, which Musicas to fetch.
     */
    where?: MusicaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicas to fetch.
     */
    orderBy?: MusicaOrderByWithRelationInput | MusicaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Musicas.
     */
    cursor?: MusicaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicas.
     */
    skip?: number
    distinct?: MusicaScalarFieldEnum | MusicaScalarFieldEnum[]
  }

  /**
   * Musica create
   */
  export type MusicaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The data needed to create a Musica.
     */
    data: XOR<MusicaCreateInput, MusicaUncheckedCreateInput>
  }

  /**
   * Musica createMany
   */
  export type MusicaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Musicas.
     */
    data: MusicaCreateManyInput | MusicaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Musica createManyAndReturn
   */
  export type MusicaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * The data used to create many Musicas.
     */
    data: MusicaCreateManyInput | MusicaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Musica update
   */
  export type MusicaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The data needed to update a Musica.
     */
    data: XOR<MusicaUpdateInput, MusicaUncheckedUpdateInput>
    /**
     * Choose, which Musica to update.
     */
    where: MusicaWhereUniqueInput
  }

  /**
   * Musica updateMany
   */
  export type MusicaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Musicas.
     */
    data: XOR<MusicaUpdateManyMutationInput, MusicaUncheckedUpdateManyInput>
    /**
     * Filter which Musicas to update
     */
    where?: MusicaWhereInput
    /**
     * Limit how many Musicas to update.
     */
    limit?: number
  }

  /**
   * Musica updateManyAndReturn
   */
  export type MusicaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * The data used to update Musicas.
     */
    data: XOR<MusicaUpdateManyMutationInput, MusicaUncheckedUpdateManyInput>
    /**
     * Filter which Musicas to update
     */
    where?: MusicaWhereInput
    /**
     * Limit how many Musicas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Musica upsert
   */
  export type MusicaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * The filter to search for the Musica to update in case it exists.
     */
    where: MusicaWhereUniqueInput
    /**
     * In case the Musica found by the `where` argument doesn't exist, create a new Musica with this data.
     */
    create: XOR<MusicaCreateInput, MusicaUncheckedCreateInput>
    /**
     * In case the Musica was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicaUpdateInput, MusicaUncheckedUpdateInput>
  }

  /**
   * Musica delete
   */
  export type MusicaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
    /**
     * Filter which Musica to delete.
     */
    where: MusicaWhereUniqueInput
  }

  /**
   * Musica deleteMany
   */
  export type MusicaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musicas to delete
     */
    where?: MusicaWhereInput
    /**
     * Limit how many Musicas to delete.
     */
    limit?: number
  }

  /**
   * Musica.reproducoes
   */
  export type Musica$reproducoesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    where?: ReproducaoWhereInput
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    cursor?: ReproducaoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReproducaoScalarFieldEnum | ReproducaoScalarFieldEnum[]
  }

  /**
   * Musica without action
   */
  export type MusicaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musica
     */
    select?: MusicaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Musica
     */
    omit?: MusicaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicaInclude<ExtArgs> | null
  }


  /**
   * Model Reproducao
   */

  export type AggregateReproducao = {
    _count: ReproducaoCountAggregateOutputType | null
    _avg: ReproducaoAvgAggregateOutputType | null
    _sum: ReproducaoSumAggregateOutputType | null
    _min: ReproducaoMinAggregateOutputType | null
    _max: ReproducaoMaxAggregateOutputType | null
  }

  export type ReproducaoAvgAggregateOutputType = {
    usuarioId: number | null
    musicaId: number | null
  }

  export type ReproducaoSumAggregateOutputType = {
    usuarioId: number | null
    musicaId: number | null
  }

  export type ReproducaoMinAggregateOutputType = {
    data_escuta: Date | null
    usuarioId: number | null
    musicaId: number | null
  }

  export type ReproducaoMaxAggregateOutputType = {
    data_escuta: Date | null
    usuarioId: number | null
    musicaId: number | null
  }

  export type ReproducaoCountAggregateOutputType = {
    data_escuta: number
    usuarioId: number
    musicaId: number
    _all: number
  }


  export type ReproducaoAvgAggregateInputType = {
    usuarioId?: true
    musicaId?: true
  }

  export type ReproducaoSumAggregateInputType = {
    usuarioId?: true
    musicaId?: true
  }

  export type ReproducaoMinAggregateInputType = {
    data_escuta?: true
    usuarioId?: true
    musicaId?: true
  }

  export type ReproducaoMaxAggregateInputType = {
    data_escuta?: true
    usuarioId?: true
    musicaId?: true
  }

  export type ReproducaoCountAggregateInputType = {
    data_escuta?: true
    usuarioId?: true
    musicaId?: true
    _all?: true
  }

  export type ReproducaoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reproducao to aggregate.
     */
    where?: ReproducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reproducaos to fetch.
     */
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReproducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reproducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reproducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reproducaos
    **/
    _count?: true | ReproducaoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReproducaoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReproducaoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReproducaoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReproducaoMaxAggregateInputType
  }

  export type GetReproducaoAggregateType<T extends ReproducaoAggregateArgs> = {
        [P in keyof T & keyof AggregateReproducao]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReproducao[P]>
      : GetScalarType<T[P], AggregateReproducao[P]>
  }




  export type ReproducaoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReproducaoWhereInput
    orderBy?: ReproducaoOrderByWithAggregationInput | ReproducaoOrderByWithAggregationInput[]
    by: ReproducaoScalarFieldEnum[] | ReproducaoScalarFieldEnum
    having?: ReproducaoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReproducaoCountAggregateInputType | true
    _avg?: ReproducaoAvgAggregateInputType
    _sum?: ReproducaoSumAggregateInputType
    _min?: ReproducaoMinAggregateInputType
    _max?: ReproducaoMaxAggregateInputType
  }

  export type ReproducaoGroupByOutputType = {
    data_escuta: Date
    usuarioId: number
    musicaId: number
    _count: ReproducaoCountAggregateOutputType | null
    _avg: ReproducaoAvgAggregateOutputType | null
    _sum: ReproducaoSumAggregateOutputType | null
    _min: ReproducaoMinAggregateOutputType | null
    _max: ReproducaoMaxAggregateOutputType | null
  }

  type GetReproducaoGroupByPayload<T extends ReproducaoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReproducaoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReproducaoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReproducaoGroupByOutputType[P]>
            : GetScalarType<T[P], ReproducaoGroupByOutputType[P]>
        }
      >
    >


  export type ReproducaoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    data_escuta?: boolean
    usuarioId?: boolean
    musicaId?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reproducao"]>

  export type ReproducaoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    data_escuta?: boolean
    usuarioId?: boolean
    musicaId?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reproducao"]>

  export type ReproducaoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    data_escuta?: boolean
    usuarioId?: boolean
    musicaId?: boolean
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reproducao"]>

  export type ReproducaoSelectScalar = {
    data_escuta?: boolean
    usuarioId?: boolean
    musicaId?: boolean
  }

  export type ReproducaoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"data_escuta" | "usuarioId" | "musicaId", ExtArgs["result"]["reproducao"]>
  export type ReproducaoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }
  export type ReproducaoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }
  export type ReproducaoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | usuariosDefaultArgs<ExtArgs>
    musica?: boolean | MusicaDefaultArgs<ExtArgs>
  }

  export type $ReproducaoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reproducao"
    objects: {
      usuario: Prisma.$usuariosPayload<ExtArgs>
      musica: Prisma.$MusicaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      data_escuta: Date
      usuarioId: number
      musicaId: number
    }, ExtArgs["result"]["reproducao"]>
    composites: {}
  }

  type ReproducaoGetPayload<S extends boolean | null | undefined | ReproducaoDefaultArgs> = $Result.GetResult<Prisma.$ReproducaoPayload, S>

  type ReproducaoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReproducaoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReproducaoCountAggregateInputType | true
    }

  export interface ReproducaoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reproducao'], meta: { name: 'Reproducao' } }
    /**
     * Find zero or one Reproducao that matches the filter.
     * @param {ReproducaoFindUniqueArgs} args - Arguments to find a Reproducao
     * @example
     * // Get one Reproducao
     * const reproducao = await prisma.reproducao.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReproducaoFindUniqueArgs>(args: SelectSubset<T, ReproducaoFindUniqueArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reproducao that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReproducaoFindUniqueOrThrowArgs} args - Arguments to find a Reproducao
     * @example
     * // Get one Reproducao
     * const reproducao = await prisma.reproducao.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReproducaoFindUniqueOrThrowArgs>(args: SelectSubset<T, ReproducaoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reproducao that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoFindFirstArgs} args - Arguments to find a Reproducao
     * @example
     * // Get one Reproducao
     * const reproducao = await prisma.reproducao.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReproducaoFindFirstArgs>(args?: SelectSubset<T, ReproducaoFindFirstArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reproducao that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoFindFirstOrThrowArgs} args - Arguments to find a Reproducao
     * @example
     * // Get one Reproducao
     * const reproducao = await prisma.reproducao.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReproducaoFindFirstOrThrowArgs>(args?: SelectSubset<T, ReproducaoFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reproducaos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reproducaos
     * const reproducaos = await prisma.reproducao.findMany()
     * 
     * // Get first 10 Reproducaos
     * const reproducaos = await prisma.reproducao.findMany({ take: 10 })
     * 
     * // Only select the `data_escuta`
     * const reproducaoWithData_escutaOnly = await prisma.reproducao.findMany({ select: { data_escuta: true } })
     * 
     */
    findMany<T extends ReproducaoFindManyArgs>(args?: SelectSubset<T, ReproducaoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reproducao.
     * @param {ReproducaoCreateArgs} args - Arguments to create a Reproducao.
     * @example
     * // Create one Reproducao
     * const Reproducao = await prisma.reproducao.create({
     *   data: {
     *     // ... data to create a Reproducao
     *   }
     * })
     * 
     */
    create<T extends ReproducaoCreateArgs>(args: SelectSubset<T, ReproducaoCreateArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reproducaos.
     * @param {ReproducaoCreateManyArgs} args - Arguments to create many Reproducaos.
     * @example
     * // Create many Reproducaos
     * const reproducao = await prisma.reproducao.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReproducaoCreateManyArgs>(args?: SelectSubset<T, ReproducaoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reproducaos and returns the data saved in the database.
     * @param {ReproducaoCreateManyAndReturnArgs} args - Arguments to create many Reproducaos.
     * @example
     * // Create many Reproducaos
     * const reproducao = await prisma.reproducao.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reproducaos and only return the `data_escuta`
     * const reproducaoWithData_escutaOnly = await prisma.reproducao.createManyAndReturn({
     *   select: { data_escuta: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReproducaoCreateManyAndReturnArgs>(args?: SelectSubset<T, ReproducaoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reproducao.
     * @param {ReproducaoDeleteArgs} args - Arguments to delete one Reproducao.
     * @example
     * // Delete one Reproducao
     * const Reproducao = await prisma.reproducao.delete({
     *   where: {
     *     // ... filter to delete one Reproducao
     *   }
     * })
     * 
     */
    delete<T extends ReproducaoDeleteArgs>(args: SelectSubset<T, ReproducaoDeleteArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reproducao.
     * @param {ReproducaoUpdateArgs} args - Arguments to update one Reproducao.
     * @example
     * // Update one Reproducao
     * const reproducao = await prisma.reproducao.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReproducaoUpdateArgs>(args: SelectSubset<T, ReproducaoUpdateArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reproducaos.
     * @param {ReproducaoDeleteManyArgs} args - Arguments to filter Reproducaos to delete.
     * @example
     * // Delete a few Reproducaos
     * const { count } = await prisma.reproducao.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReproducaoDeleteManyArgs>(args?: SelectSubset<T, ReproducaoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reproducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reproducaos
     * const reproducao = await prisma.reproducao.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReproducaoUpdateManyArgs>(args: SelectSubset<T, ReproducaoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reproducaos and returns the data updated in the database.
     * @param {ReproducaoUpdateManyAndReturnArgs} args - Arguments to update many Reproducaos.
     * @example
     * // Update many Reproducaos
     * const reproducao = await prisma.reproducao.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reproducaos and only return the `data_escuta`
     * const reproducaoWithData_escutaOnly = await prisma.reproducao.updateManyAndReturn({
     *   select: { data_escuta: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReproducaoUpdateManyAndReturnArgs>(args: SelectSubset<T, ReproducaoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reproducao.
     * @param {ReproducaoUpsertArgs} args - Arguments to update or create a Reproducao.
     * @example
     * // Update or create a Reproducao
     * const reproducao = await prisma.reproducao.upsert({
     *   create: {
     *     // ... data to create a Reproducao
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reproducao we want to update
     *   }
     * })
     */
    upsert<T extends ReproducaoUpsertArgs>(args: SelectSubset<T, ReproducaoUpsertArgs<ExtArgs>>): Prisma__ReproducaoClient<$Result.GetResult<Prisma.$ReproducaoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reproducaos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoCountArgs} args - Arguments to filter Reproducaos to count.
     * @example
     * // Count the number of Reproducaos
     * const count = await prisma.reproducao.count({
     *   where: {
     *     // ... the filter for the Reproducaos we want to count
     *   }
     * })
    **/
    count<T extends ReproducaoCountArgs>(
      args?: Subset<T, ReproducaoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReproducaoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reproducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReproducaoAggregateArgs>(args: Subset<T, ReproducaoAggregateArgs>): Prisma.PrismaPromise<GetReproducaoAggregateType<T>>

    /**
     * Group by Reproducao.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReproducaoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReproducaoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReproducaoGroupByArgs['orderBy'] }
        : { orderBy?: ReproducaoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReproducaoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReproducaoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reproducao model
   */
  readonly fields: ReproducaoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reproducao.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReproducaoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends usuariosDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usuariosDefaultArgs<ExtArgs>>): Prisma__usuariosClient<$Result.GetResult<Prisma.$usuariosPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    musica<T extends MusicaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MusicaDefaultArgs<ExtArgs>>): Prisma__MusicaClient<$Result.GetResult<Prisma.$MusicaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reproducao model
   */
  interface ReproducaoFieldRefs {
    readonly data_escuta: FieldRef<"Reproducao", 'DateTime'>
    readonly usuarioId: FieldRef<"Reproducao", 'Int'>
    readonly musicaId: FieldRef<"Reproducao", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reproducao findUnique
   */
  export type ReproducaoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter, which Reproducao to fetch.
     */
    where: ReproducaoWhereUniqueInput
  }

  /**
   * Reproducao findUniqueOrThrow
   */
  export type ReproducaoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter, which Reproducao to fetch.
     */
    where: ReproducaoWhereUniqueInput
  }

  /**
   * Reproducao findFirst
   */
  export type ReproducaoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter, which Reproducao to fetch.
     */
    where?: ReproducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reproducaos to fetch.
     */
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reproducaos.
     */
    cursor?: ReproducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reproducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reproducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reproducaos.
     */
    distinct?: ReproducaoScalarFieldEnum | ReproducaoScalarFieldEnum[]
  }

  /**
   * Reproducao findFirstOrThrow
   */
  export type ReproducaoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter, which Reproducao to fetch.
     */
    where?: ReproducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reproducaos to fetch.
     */
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reproducaos.
     */
    cursor?: ReproducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reproducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reproducaos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reproducaos.
     */
    distinct?: ReproducaoScalarFieldEnum | ReproducaoScalarFieldEnum[]
  }

  /**
   * Reproducao findMany
   */
  export type ReproducaoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter, which Reproducaos to fetch.
     */
    where?: ReproducaoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reproducaos to fetch.
     */
    orderBy?: ReproducaoOrderByWithRelationInput | ReproducaoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reproducaos.
     */
    cursor?: ReproducaoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reproducaos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reproducaos.
     */
    skip?: number
    distinct?: ReproducaoScalarFieldEnum | ReproducaoScalarFieldEnum[]
  }

  /**
   * Reproducao create
   */
  export type ReproducaoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * The data needed to create a Reproducao.
     */
    data: XOR<ReproducaoCreateInput, ReproducaoUncheckedCreateInput>
  }

  /**
   * Reproducao createMany
   */
  export type ReproducaoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reproducaos.
     */
    data: ReproducaoCreateManyInput | ReproducaoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reproducao createManyAndReturn
   */
  export type ReproducaoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * The data used to create many Reproducaos.
     */
    data: ReproducaoCreateManyInput | ReproducaoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reproducao update
   */
  export type ReproducaoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * The data needed to update a Reproducao.
     */
    data: XOR<ReproducaoUpdateInput, ReproducaoUncheckedUpdateInput>
    /**
     * Choose, which Reproducao to update.
     */
    where: ReproducaoWhereUniqueInput
  }

  /**
   * Reproducao updateMany
   */
  export type ReproducaoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reproducaos.
     */
    data: XOR<ReproducaoUpdateManyMutationInput, ReproducaoUncheckedUpdateManyInput>
    /**
     * Filter which Reproducaos to update
     */
    where?: ReproducaoWhereInput
    /**
     * Limit how many Reproducaos to update.
     */
    limit?: number
  }

  /**
   * Reproducao updateManyAndReturn
   */
  export type ReproducaoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * The data used to update Reproducaos.
     */
    data: XOR<ReproducaoUpdateManyMutationInput, ReproducaoUncheckedUpdateManyInput>
    /**
     * Filter which Reproducaos to update
     */
    where?: ReproducaoWhereInput
    /**
     * Limit how many Reproducaos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reproducao upsert
   */
  export type ReproducaoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * The filter to search for the Reproducao to update in case it exists.
     */
    where: ReproducaoWhereUniqueInput
    /**
     * In case the Reproducao found by the `where` argument doesn't exist, create a new Reproducao with this data.
     */
    create: XOR<ReproducaoCreateInput, ReproducaoUncheckedCreateInput>
    /**
     * In case the Reproducao was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReproducaoUpdateInput, ReproducaoUncheckedUpdateInput>
  }

  /**
   * Reproducao delete
   */
  export type ReproducaoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
    /**
     * Filter which Reproducao to delete.
     */
    where: ReproducaoWhereUniqueInput
  }

  /**
   * Reproducao deleteMany
   */
  export type ReproducaoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reproducaos to delete
     */
    where?: ReproducaoWhereInput
    /**
     * Limit how many Reproducaos to delete.
     */
    limit?: number
  }

  /**
   * Reproducao without action
   */
  export type ReproducaoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reproducao
     */
    select?: ReproducaoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reproducao
     */
    omit?: ReproducaoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReproducaoInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuariosScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    email: 'email',
    photo: 'photo',
    privilegios: 'privilegios'
  };

  export type UsuariosScalarFieldEnum = (typeof UsuariosScalarFieldEnum)[keyof typeof UsuariosScalarFieldEnum]


  export const ArtistaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    foto: 'foto',
    numero_streams: 'numero_streams'
  };

  export type ArtistaScalarFieldEnum = (typeof ArtistaScalarFieldEnum)[keyof typeof ArtistaScalarFieldEnum]


  export const MusicaScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    genero: 'genero',
    album: 'album',
    artistaId: 'artistaId'
  };

  export type MusicaScalarFieldEnum = (typeof MusicaScalarFieldEnum)[keyof typeof MusicaScalarFieldEnum]


  export const ReproducaoScalarFieldEnum: {
    data_escuta: 'data_escuta',
    usuarioId: 'usuarioId',
    musicaId: 'musicaId'
  };

  export type ReproducaoScalarFieldEnum = (typeof ReproducaoScalarFieldEnum)[keyof typeof ReproducaoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'TipoPrivilegio'
   */
  export type EnumTipoPrivilegioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPrivilegio'>
    


  /**
   * Reference to a field of type 'TipoPrivilegio[]'
   */
  export type ListEnumTipoPrivilegioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'TipoPrivilegio[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type usuariosWhereInput = {
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    id?: IntFilter<"usuarios"> | number
    nome?: StringFilter<"usuarios"> | string
    email?: StringFilter<"usuarios"> | string
    photo?: StringNullableFilter<"usuarios"> | string | null
    privilegios?: EnumTipoPrivilegioFilter<"usuarios"> | $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoListRelationFilter
  }

  export type usuariosOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
    privilegios?: SortOrder
    reprodicoes?: ReproducaoOrderByRelationAggregateInput
  }

  export type usuariosWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usuariosWhereInput | usuariosWhereInput[]
    OR?: usuariosWhereInput[]
    NOT?: usuariosWhereInput | usuariosWhereInput[]
    nome?: StringFilter<"usuarios"> | string
    photo?: StringNullableFilter<"usuarios"> | string | null
    privilegios?: EnumTipoPrivilegioFilter<"usuarios"> | $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoListRelationFilter
  }, "id" | "email">

  export type usuariosOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    photo?: SortOrderInput | SortOrder
    privilegios?: SortOrder
    _count?: usuariosCountOrderByAggregateInput
    _avg?: usuariosAvgOrderByAggregateInput
    _max?: usuariosMaxOrderByAggregateInput
    _min?: usuariosMinOrderByAggregateInput
    _sum?: usuariosSumOrderByAggregateInput
  }

  export type usuariosScalarWhereWithAggregatesInput = {
    AND?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    OR?: usuariosScalarWhereWithAggregatesInput[]
    NOT?: usuariosScalarWhereWithAggregatesInput | usuariosScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"usuarios"> | number
    nome?: StringWithAggregatesFilter<"usuarios"> | string
    email?: StringWithAggregatesFilter<"usuarios"> | string
    photo?: StringNullableWithAggregatesFilter<"usuarios"> | string | null
    privilegios?: EnumTipoPrivilegioWithAggregatesFilter<"usuarios"> | $Enums.TipoPrivilegio
  }

  export type ArtistaWhereInput = {
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    id?: IntFilter<"Artista"> | number
    nome?: StringFilter<"Artista"> | string
    foto?: StringNullableFilter<"Artista"> | string | null
    numero_streams?: IntFilter<"Artista"> | number
    musicas?: MusicaListRelationFilter
  }

  export type ArtistaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    foto?: SortOrderInput | SortOrder
    numero_streams?: SortOrder
    musicas?: MusicaOrderByRelationAggregateInput
  }

  export type ArtistaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ArtistaWhereInput | ArtistaWhereInput[]
    OR?: ArtistaWhereInput[]
    NOT?: ArtistaWhereInput | ArtistaWhereInput[]
    nome?: StringFilter<"Artista"> | string
    foto?: StringNullableFilter<"Artista"> | string | null
    numero_streams?: IntFilter<"Artista"> | number
    musicas?: MusicaListRelationFilter
  }, "id">

  export type ArtistaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    foto?: SortOrderInput | SortOrder
    numero_streams?: SortOrder
    _count?: ArtistaCountOrderByAggregateInput
    _avg?: ArtistaAvgOrderByAggregateInput
    _max?: ArtistaMaxOrderByAggregateInput
    _min?: ArtistaMinOrderByAggregateInput
    _sum?: ArtistaSumOrderByAggregateInput
  }

  export type ArtistaScalarWhereWithAggregatesInput = {
    AND?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    OR?: ArtistaScalarWhereWithAggregatesInput[]
    NOT?: ArtistaScalarWhereWithAggregatesInput | ArtistaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Artista"> | number
    nome?: StringWithAggregatesFilter<"Artista"> | string
    foto?: StringNullableWithAggregatesFilter<"Artista"> | string | null
    numero_streams?: IntWithAggregatesFilter<"Artista"> | number
  }

  export type MusicaWhereInput = {
    AND?: MusicaWhereInput | MusicaWhereInput[]
    OR?: MusicaWhereInput[]
    NOT?: MusicaWhereInput | MusicaWhereInput[]
    id?: IntFilter<"Musica"> | number
    nome?: StringFilter<"Musica"> | string
    genero?: StringFilter<"Musica"> | string
    album?: StringFilter<"Musica"> | string
    artistaId?: IntFilter<"Musica"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    reproducoes?: ReproducaoListRelationFilter
  }

  export type MusicaOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    album?: SortOrder
    artistaId?: SortOrder
    artista?: ArtistaOrderByWithRelationInput
    reproducoes?: ReproducaoOrderByRelationAggregateInput
  }

  export type MusicaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MusicaWhereInput | MusicaWhereInput[]
    OR?: MusicaWhereInput[]
    NOT?: MusicaWhereInput | MusicaWhereInput[]
    nome?: StringFilter<"Musica"> | string
    genero?: StringFilter<"Musica"> | string
    album?: StringFilter<"Musica"> | string
    artistaId?: IntFilter<"Musica"> | number
    artista?: XOR<ArtistaScalarRelationFilter, ArtistaWhereInput>
    reproducoes?: ReproducaoListRelationFilter
  }, "id">

  export type MusicaOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    album?: SortOrder
    artistaId?: SortOrder
    _count?: MusicaCountOrderByAggregateInput
    _avg?: MusicaAvgOrderByAggregateInput
    _max?: MusicaMaxOrderByAggregateInput
    _min?: MusicaMinOrderByAggregateInput
    _sum?: MusicaSumOrderByAggregateInput
  }

  export type MusicaScalarWhereWithAggregatesInput = {
    AND?: MusicaScalarWhereWithAggregatesInput | MusicaScalarWhereWithAggregatesInput[]
    OR?: MusicaScalarWhereWithAggregatesInput[]
    NOT?: MusicaScalarWhereWithAggregatesInput | MusicaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Musica"> | number
    nome?: StringWithAggregatesFilter<"Musica"> | string
    genero?: StringWithAggregatesFilter<"Musica"> | string
    album?: StringWithAggregatesFilter<"Musica"> | string
    artistaId?: IntWithAggregatesFilter<"Musica"> | number
  }

  export type ReproducaoWhereInput = {
    AND?: ReproducaoWhereInput | ReproducaoWhereInput[]
    OR?: ReproducaoWhereInput[]
    NOT?: ReproducaoWhereInput | ReproducaoWhereInput[]
    data_escuta?: DateTimeFilter<"Reproducao"> | Date | string
    usuarioId?: IntFilter<"Reproducao"> | number
    musicaId?: IntFilter<"Reproducao"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    musica?: XOR<MusicaScalarRelationFilter, MusicaWhereInput>
  }

  export type ReproducaoOrderByWithRelationInput = {
    data_escuta?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    usuario?: usuariosOrderByWithRelationInput
    musica?: MusicaOrderByWithRelationInput
  }

  export type ReproducaoWhereUniqueInput = Prisma.AtLeast<{
    usuarioId_musicaId_data_escuta?: ReproducaoUsuarioIdMusicaIdData_escutaCompoundUniqueInput
    AND?: ReproducaoWhereInput | ReproducaoWhereInput[]
    OR?: ReproducaoWhereInput[]
    NOT?: ReproducaoWhereInput | ReproducaoWhereInput[]
    data_escuta?: DateTimeFilter<"Reproducao"> | Date | string
    usuarioId?: IntFilter<"Reproducao"> | number
    musicaId?: IntFilter<"Reproducao"> | number
    usuario?: XOR<UsuariosScalarRelationFilter, usuariosWhereInput>
    musica?: XOR<MusicaScalarRelationFilter, MusicaWhereInput>
  }, "usuarioId_musicaId_data_escuta">

  export type ReproducaoOrderByWithAggregationInput = {
    data_escuta?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
    _count?: ReproducaoCountOrderByAggregateInput
    _avg?: ReproducaoAvgOrderByAggregateInput
    _max?: ReproducaoMaxOrderByAggregateInput
    _min?: ReproducaoMinOrderByAggregateInput
    _sum?: ReproducaoSumOrderByAggregateInput
  }

  export type ReproducaoScalarWhereWithAggregatesInput = {
    AND?: ReproducaoScalarWhereWithAggregatesInput | ReproducaoScalarWhereWithAggregatesInput[]
    OR?: ReproducaoScalarWhereWithAggregatesInput[]
    NOT?: ReproducaoScalarWhereWithAggregatesInput | ReproducaoScalarWhereWithAggregatesInput[]
    data_escuta?: DateTimeWithAggregatesFilter<"Reproducao"> | Date | string
    usuarioId?: IntWithAggregatesFilter<"Reproducao"> | number
    musicaId?: IntWithAggregatesFilter<"Reproducao"> | number
  }

  export type usuariosCreateInput = {
    nome: string
    email: string
    photo?: string | null
    privilegios?: $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUncheckedCreateInput = {
    id?: number
    nome: string
    email: string
    photo?: string | null
    privilegios?: $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type usuariosUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
    reprodicoes?: ReproducaoUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type usuariosCreateManyInput = {
    id?: number
    nome: string
    email: string
    photo?: string | null
    privilegios?: $Enums.TipoPrivilegio
  }

  export type usuariosUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
  }

  export type usuariosUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
  }

  export type ArtistaCreateInput = {
    nome: string
    foto?: string | null
    numero_streams?: number
    musicas?: MusicaCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUncheckedCreateInput = {
    id?: number
    nome: string
    foto?: string | null
    numero_streams?: number
    musicas?: MusicaUncheckedCreateNestedManyWithoutArtistaInput
  }

  export type ArtistaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
    musicas?: MusicaUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
    musicas?: MusicaUncheckedUpdateManyWithoutArtistaNestedInput
  }

  export type ArtistaCreateManyInput = {
    id?: number
    nome: string
    foto?: string | null
    numero_streams?: number
  }

  export type ArtistaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
  }

  export type MusicaCreateInput = {
    nome: string
    genero: string
    album: string
    artista: ArtistaCreateNestedOneWithoutMusicasInput
    reproducoes?: ReproducaoCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUncheckedCreateInput = {
    id?: number
    nome: string
    genero: string
    album: string
    artistaId: number
    reproducoes?: ReproducaoUncheckedCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    artista?: ArtistaUpdateOneRequiredWithoutMusicasNestedInput
    reproducoes?: ReproducaoUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    artistaId?: IntFieldUpdateOperationsInput | number
    reproducoes?: ReproducaoUncheckedUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaCreateManyInput = {
    id?: number
    nome: string
    genero: string
    album: string
    artistaId: number
  }

  export type MusicaUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
  }

  export type MusicaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoCreateInput = {
    data_escuta?: Date | string
    usuario: usuariosCreateNestedOneWithoutReprodicoesInput
    musica: MusicaCreateNestedOneWithoutReproducoesInput
  }

  export type ReproducaoUncheckedCreateInput = {
    data_escuta?: Date | string
    usuarioId: number
    musicaId: number
  }

  export type ReproducaoUpdateInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutReprodicoesNestedInput
    musica?: MusicaUpdateOneRequiredWithoutReproducoesNestedInput
  }

  export type ReproducaoUncheckedUpdateInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoCreateManyInput = {
    data_escuta?: Date | string
    usuarioId: number
    musicaId: number
  }

  export type ReproducaoUpdateManyMutationInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReproducaoUncheckedUpdateManyInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
    musicaId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type EnumTipoPrivilegioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPrivilegio | EnumTipoPrivilegioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPrivilegioFilter<$PrismaModel> | $Enums.TipoPrivilegio
  }

  export type ReproducaoListRelationFilter = {
    every?: ReproducaoWhereInput
    some?: ReproducaoWhereInput
    none?: ReproducaoWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReproducaoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usuariosCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    privilegios?: SortOrder
  }

  export type usuariosAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usuariosMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    privilegios?: SortOrder
  }

  export type usuariosMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    photo?: SortOrder
    privilegios?: SortOrder
  }

  export type usuariosSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type EnumTipoPrivilegioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPrivilegio | EnumTipoPrivilegioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPrivilegioWithAggregatesFilter<$PrismaModel> | $Enums.TipoPrivilegio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPrivilegioFilter<$PrismaModel>
    _max?: NestedEnumTipoPrivilegioFilter<$PrismaModel>
  }

  export type MusicaListRelationFilter = {
    every?: MusicaWhereInput
    some?: MusicaWhereInput
    none?: MusicaWhereInput
  }

  export type MusicaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto?: SortOrder
    numero_streams?: SortOrder
  }

  export type ArtistaAvgOrderByAggregateInput = {
    id?: SortOrder
    numero_streams?: SortOrder
  }

  export type ArtistaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto?: SortOrder
    numero_streams?: SortOrder
  }

  export type ArtistaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    foto?: SortOrder
    numero_streams?: SortOrder
  }

  export type ArtistaSumOrderByAggregateInput = {
    id?: SortOrder
    numero_streams?: SortOrder
  }

  export type ArtistaScalarRelationFilter = {
    is?: ArtistaWhereInput
    isNot?: ArtistaWhereInput
  }

  export type MusicaCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    album?: SortOrder
    artistaId?: SortOrder
  }

  export type MusicaAvgOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
  }

  export type MusicaMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    album?: SortOrder
    artistaId?: SortOrder
  }

  export type MusicaMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    genero?: SortOrder
    album?: SortOrder
    artistaId?: SortOrder
  }

  export type MusicaSumOrderByAggregateInput = {
    id?: SortOrder
    artistaId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UsuariosScalarRelationFilter = {
    is?: usuariosWhereInput
    isNot?: usuariosWhereInput
  }

  export type MusicaScalarRelationFilter = {
    is?: MusicaWhereInput
    isNot?: MusicaWhereInput
  }

  export type ReproducaoUsuarioIdMusicaIdData_escutaCompoundUniqueInput = {
    usuarioId: number
    musicaId: number
    data_escuta: Date | string
  }

  export type ReproducaoCountOrderByAggregateInput = {
    data_escuta?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
  }

  export type ReproducaoAvgOrderByAggregateInput = {
    usuarioId?: SortOrder
    musicaId?: SortOrder
  }

  export type ReproducaoMaxOrderByAggregateInput = {
    data_escuta?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
  }

  export type ReproducaoMinOrderByAggregateInput = {
    data_escuta?: SortOrder
    usuarioId?: SortOrder
    musicaId?: SortOrder
  }

  export type ReproducaoSumOrderByAggregateInput = {
    usuarioId?: SortOrder
    musicaId?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReproducaoCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput> | ReproducaoCreateWithoutUsuarioInput[] | ReproducaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutUsuarioInput | ReproducaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReproducaoCreateManyUsuarioInputEnvelope
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
  }

  export type ReproducaoUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput> | ReproducaoCreateWithoutUsuarioInput[] | ReproducaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutUsuarioInput | ReproducaoCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReproducaoCreateManyUsuarioInputEnvelope
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumTipoPrivilegioFieldUpdateOperationsInput = {
    set?: $Enums.TipoPrivilegio
  }

  export type ReproducaoUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput> | ReproducaoCreateWithoutUsuarioInput[] | ReproducaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutUsuarioInput | ReproducaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReproducaoUpsertWithWhereUniqueWithoutUsuarioInput | ReproducaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReproducaoCreateManyUsuarioInputEnvelope
    set?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    disconnect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    delete?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    update?: ReproducaoUpdateWithWhereUniqueWithoutUsuarioInput | ReproducaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReproducaoUpdateManyWithWhereWithoutUsuarioInput | ReproducaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReproducaoUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput> | ReproducaoCreateWithoutUsuarioInput[] | ReproducaoUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutUsuarioInput | ReproducaoCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReproducaoUpsertWithWhereUniqueWithoutUsuarioInput | ReproducaoUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReproducaoCreateManyUsuarioInputEnvelope
    set?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    disconnect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    delete?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    update?: ReproducaoUpdateWithWhereUniqueWithoutUsuarioInput | ReproducaoUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReproducaoUpdateManyWithWhereWithoutUsuarioInput | ReproducaoUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
  }

  export type MusicaCreateNestedManyWithoutArtistaInput = {
    create?: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput> | MusicaCreateWithoutArtistaInput[] | MusicaUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: MusicaCreateOrConnectWithoutArtistaInput | MusicaCreateOrConnectWithoutArtistaInput[]
    createMany?: MusicaCreateManyArtistaInputEnvelope
    connect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
  }

  export type MusicaUncheckedCreateNestedManyWithoutArtistaInput = {
    create?: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput> | MusicaCreateWithoutArtistaInput[] | MusicaUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: MusicaCreateOrConnectWithoutArtistaInput | MusicaCreateOrConnectWithoutArtistaInput[]
    createMany?: MusicaCreateManyArtistaInputEnvelope
    connect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
  }

  export type MusicaUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput> | MusicaCreateWithoutArtistaInput[] | MusicaUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: MusicaCreateOrConnectWithoutArtistaInput | MusicaCreateOrConnectWithoutArtistaInput[]
    upsert?: MusicaUpsertWithWhereUniqueWithoutArtistaInput | MusicaUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: MusicaCreateManyArtistaInputEnvelope
    set?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    disconnect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    delete?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    connect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    update?: MusicaUpdateWithWhereUniqueWithoutArtistaInput | MusicaUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: MusicaUpdateManyWithWhereWithoutArtistaInput | MusicaUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: MusicaScalarWhereInput | MusicaScalarWhereInput[]
  }

  export type MusicaUncheckedUpdateManyWithoutArtistaNestedInput = {
    create?: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput> | MusicaCreateWithoutArtistaInput[] | MusicaUncheckedCreateWithoutArtistaInput[]
    connectOrCreate?: MusicaCreateOrConnectWithoutArtistaInput | MusicaCreateOrConnectWithoutArtistaInput[]
    upsert?: MusicaUpsertWithWhereUniqueWithoutArtistaInput | MusicaUpsertWithWhereUniqueWithoutArtistaInput[]
    createMany?: MusicaCreateManyArtistaInputEnvelope
    set?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    disconnect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    delete?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    connect?: MusicaWhereUniqueInput | MusicaWhereUniqueInput[]
    update?: MusicaUpdateWithWhereUniqueWithoutArtistaInput | MusicaUpdateWithWhereUniqueWithoutArtistaInput[]
    updateMany?: MusicaUpdateManyWithWhereWithoutArtistaInput | MusicaUpdateManyWithWhereWithoutArtistaInput[]
    deleteMany?: MusicaScalarWhereInput | MusicaScalarWhereInput[]
  }

  export type ArtistaCreateNestedOneWithoutMusicasInput = {
    create?: XOR<ArtistaCreateWithoutMusicasInput, ArtistaUncheckedCreateWithoutMusicasInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutMusicasInput
    connect?: ArtistaWhereUniqueInput
  }

  export type ReproducaoCreateNestedManyWithoutMusicaInput = {
    create?: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput> | ReproducaoCreateWithoutMusicaInput[] | ReproducaoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutMusicaInput | ReproducaoCreateOrConnectWithoutMusicaInput[]
    createMany?: ReproducaoCreateManyMusicaInputEnvelope
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
  }

  export type ReproducaoUncheckedCreateNestedManyWithoutMusicaInput = {
    create?: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput> | ReproducaoCreateWithoutMusicaInput[] | ReproducaoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutMusicaInput | ReproducaoCreateOrConnectWithoutMusicaInput[]
    createMany?: ReproducaoCreateManyMusicaInputEnvelope
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
  }

  export type ArtistaUpdateOneRequiredWithoutMusicasNestedInput = {
    create?: XOR<ArtistaCreateWithoutMusicasInput, ArtistaUncheckedCreateWithoutMusicasInput>
    connectOrCreate?: ArtistaCreateOrConnectWithoutMusicasInput
    upsert?: ArtistaUpsertWithoutMusicasInput
    connect?: ArtistaWhereUniqueInput
    update?: XOR<XOR<ArtistaUpdateToOneWithWhereWithoutMusicasInput, ArtistaUpdateWithoutMusicasInput>, ArtistaUncheckedUpdateWithoutMusicasInput>
  }

  export type ReproducaoUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput> | ReproducaoCreateWithoutMusicaInput[] | ReproducaoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutMusicaInput | ReproducaoCreateOrConnectWithoutMusicaInput[]
    upsert?: ReproducaoUpsertWithWhereUniqueWithoutMusicaInput | ReproducaoUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: ReproducaoCreateManyMusicaInputEnvelope
    set?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    disconnect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    delete?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    update?: ReproducaoUpdateWithWhereUniqueWithoutMusicaInput | ReproducaoUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: ReproducaoUpdateManyWithWhereWithoutMusicaInput | ReproducaoUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
  }

  export type ReproducaoUncheckedUpdateManyWithoutMusicaNestedInput = {
    create?: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput> | ReproducaoCreateWithoutMusicaInput[] | ReproducaoUncheckedCreateWithoutMusicaInput[]
    connectOrCreate?: ReproducaoCreateOrConnectWithoutMusicaInput | ReproducaoCreateOrConnectWithoutMusicaInput[]
    upsert?: ReproducaoUpsertWithWhereUniqueWithoutMusicaInput | ReproducaoUpsertWithWhereUniqueWithoutMusicaInput[]
    createMany?: ReproducaoCreateManyMusicaInputEnvelope
    set?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    disconnect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    delete?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    connect?: ReproducaoWhereUniqueInput | ReproducaoWhereUniqueInput[]
    update?: ReproducaoUpdateWithWhereUniqueWithoutMusicaInput | ReproducaoUpdateWithWhereUniqueWithoutMusicaInput[]
    updateMany?: ReproducaoUpdateManyWithWhereWithoutMusicaInput | ReproducaoUpdateManyWithWhereWithoutMusicaInput[]
    deleteMany?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
  }

  export type usuariosCreateNestedOneWithoutReprodicoesInput = {
    create?: XOR<usuariosCreateWithoutReprodicoesInput, usuariosUncheckedCreateWithoutReprodicoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReprodicoesInput
    connect?: usuariosWhereUniqueInput
  }

  export type MusicaCreateNestedOneWithoutReproducoesInput = {
    create?: XOR<MusicaCreateWithoutReproducoesInput, MusicaUncheckedCreateWithoutReproducoesInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutReproducoesInput
    connect?: MusicaWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type usuariosUpdateOneRequiredWithoutReprodicoesNestedInput = {
    create?: XOR<usuariosCreateWithoutReprodicoesInput, usuariosUncheckedCreateWithoutReprodicoesInput>
    connectOrCreate?: usuariosCreateOrConnectWithoutReprodicoesInput
    upsert?: usuariosUpsertWithoutReprodicoesInput
    connect?: usuariosWhereUniqueInput
    update?: XOR<XOR<usuariosUpdateToOneWithWhereWithoutReprodicoesInput, usuariosUpdateWithoutReprodicoesInput>, usuariosUncheckedUpdateWithoutReprodicoesInput>
  }

  export type MusicaUpdateOneRequiredWithoutReproducoesNestedInput = {
    create?: XOR<MusicaCreateWithoutReproducoesInput, MusicaUncheckedCreateWithoutReproducoesInput>
    connectOrCreate?: MusicaCreateOrConnectWithoutReproducoesInput
    upsert?: MusicaUpsertWithoutReproducoesInput
    connect?: MusicaWhereUniqueInput
    update?: XOR<XOR<MusicaUpdateToOneWithWhereWithoutReproducoesInput, MusicaUpdateWithoutReproducoesInput>, MusicaUncheckedUpdateWithoutReproducoesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedEnumTipoPrivilegioFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPrivilegio | EnumTipoPrivilegioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPrivilegioFilter<$PrismaModel> | $Enums.TipoPrivilegio
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumTipoPrivilegioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.TipoPrivilegio | EnumTipoPrivilegioFieldRefInput<$PrismaModel>
    in?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    notIn?: $Enums.TipoPrivilegio[] | ListEnumTipoPrivilegioFieldRefInput<$PrismaModel>
    not?: NestedEnumTipoPrivilegioWithAggregatesFilter<$PrismaModel> | $Enums.TipoPrivilegio
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumTipoPrivilegioFilter<$PrismaModel>
    _max?: NestedEnumTipoPrivilegioFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ReproducaoCreateWithoutUsuarioInput = {
    data_escuta?: Date | string
    musica: MusicaCreateNestedOneWithoutReproducoesInput
  }

  export type ReproducaoUncheckedCreateWithoutUsuarioInput = {
    data_escuta?: Date | string
    musicaId: number
  }

  export type ReproducaoCreateOrConnectWithoutUsuarioInput = {
    where: ReproducaoWhereUniqueInput
    create: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput>
  }

  export type ReproducaoCreateManyUsuarioInputEnvelope = {
    data: ReproducaoCreateManyUsuarioInput | ReproducaoCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReproducaoUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReproducaoWhereUniqueInput
    update: XOR<ReproducaoUpdateWithoutUsuarioInput, ReproducaoUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReproducaoCreateWithoutUsuarioInput, ReproducaoUncheckedCreateWithoutUsuarioInput>
  }

  export type ReproducaoUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReproducaoWhereUniqueInput
    data: XOR<ReproducaoUpdateWithoutUsuarioInput, ReproducaoUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReproducaoUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReproducaoScalarWhereInput
    data: XOR<ReproducaoUpdateManyMutationInput, ReproducaoUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReproducaoScalarWhereInput = {
    AND?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
    OR?: ReproducaoScalarWhereInput[]
    NOT?: ReproducaoScalarWhereInput | ReproducaoScalarWhereInput[]
    data_escuta?: DateTimeFilter<"Reproducao"> | Date | string
    usuarioId?: IntFilter<"Reproducao"> | number
    musicaId?: IntFilter<"Reproducao"> | number
  }

  export type MusicaCreateWithoutArtistaInput = {
    nome: string
    genero: string
    album: string
    reproducoes?: ReproducaoCreateNestedManyWithoutMusicaInput
  }

  export type MusicaUncheckedCreateWithoutArtistaInput = {
    id?: number
    nome: string
    genero: string
    album: string
    reproducoes?: ReproducaoUncheckedCreateNestedManyWithoutMusicaInput
  }

  export type MusicaCreateOrConnectWithoutArtistaInput = {
    where: MusicaWhereUniqueInput
    create: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput>
  }

  export type MusicaCreateManyArtistaInputEnvelope = {
    data: MusicaCreateManyArtistaInput | MusicaCreateManyArtistaInput[]
    skipDuplicates?: boolean
  }

  export type MusicaUpsertWithWhereUniqueWithoutArtistaInput = {
    where: MusicaWhereUniqueInput
    update: XOR<MusicaUpdateWithoutArtistaInput, MusicaUncheckedUpdateWithoutArtistaInput>
    create: XOR<MusicaCreateWithoutArtistaInput, MusicaUncheckedCreateWithoutArtistaInput>
  }

  export type MusicaUpdateWithWhereUniqueWithoutArtistaInput = {
    where: MusicaWhereUniqueInput
    data: XOR<MusicaUpdateWithoutArtistaInput, MusicaUncheckedUpdateWithoutArtistaInput>
  }

  export type MusicaUpdateManyWithWhereWithoutArtistaInput = {
    where: MusicaScalarWhereInput
    data: XOR<MusicaUpdateManyMutationInput, MusicaUncheckedUpdateManyWithoutArtistaInput>
  }

  export type MusicaScalarWhereInput = {
    AND?: MusicaScalarWhereInput | MusicaScalarWhereInput[]
    OR?: MusicaScalarWhereInput[]
    NOT?: MusicaScalarWhereInput | MusicaScalarWhereInput[]
    id?: IntFilter<"Musica"> | number
    nome?: StringFilter<"Musica"> | string
    genero?: StringFilter<"Musica"> | string
    album?: StringFilter<"Musica"> | string
    artistaId?: IntFilter<"Musica"> | number
  }

  export type ArtistaCreateWithoutMusicasInput = {
    nome: string
    foto?: string | null
    numero_streams?: number
  }

  export type ArtistaUncheckedCreateWithoutMusicasInput = {
    id?: number
    nome: string
    foto?: string | null
    numero_streams?: number
  }

  export type ArtistaCreateOrConnectWithoutMusicasInput = {
    where: ArtistaWhereUniqueInput
    create: XOR<ArtistaCreateWithoutMusicasInput, ArtistaUncheckedCreateWithoutMusicasInput>
  }

  export type ReproducaoCreateWithoutMusicaInput = {
    data_escuta?: Date | string
    usuario: usuariosCreateNestedOneWithoutReprodicoesInput
  }

  export type ReproducaoUncheckedCreateWithoutMusicaInput = {
    data_escuta?: Date | string
    usuarioId: number
  }

  export type ReproducaoCreateOrConnectWithoutMusicaInput = {
    where: ReproducaoWhereUniqueInput
    create: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput>
  }

  export type ReproducaoCreateManyMusicaInputEnvelope = {
    data: ReproducaoCreateManyMusicaInput | ReproducaoCreateManyMusicaInput[]
    skipDuplicates?: boolean
  }

  export type ArtistaUpsertWithoutMusicasInput = {
    update: XOR<ArtistaUpdateWithoutMusicasInput, ArtistaUncheckedUpdateWithoutMusicasInput>
    create: XOR<ArtistaCreateWithoutMusicasInput, ArtistaUncheckedCreateWithoutMusicasInput>
    where?: ArtistaWhereInput
  }

  export type ArtistaUpdateToOneWithWhereWithoutMusicasInput = {
    where?: ArtistaWhereInput
    data: XOR<ArtistaUpdateWithoutMusicasInput, ArtistaUncheckedUpdateWithoutMusicasInput>
  }

  export type ArtistaUpdateWithoutMusicasInput = {
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistaUncheckedUpdateWithoutMusicasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    foto?: NullableStringFieldUpdateOperationsInput | string | null
    numero_streams?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoUpsertWithWhereUniqueWithoutMusicaInput = {
    where: ReproducaoWhereUniqueInput
    update: XOR<ReproducaoUpdateWithoutMusicaInput, ReproducaoUncheckedUpdateWithoutMusicaInput>
    create: XOR<ReproducaoCreateWithoutMusicaInput, ReproducaoUncheckedCreateWithoutMusicaInput>
  }

  export type ReproducaoUpdateWithWhereUniqueWithoutMusicaInput = {
    where: ReproducaoWhereUniqueInput
    data: XOR<ReproducaoUpdateWithoutMusicaInput, ReproducaoUncheckedUpdateWithoutMusicaInput>
  }

  export type ReproducaoUpdateManyWithWhereWithoutMusicaInput = {
    where: ReproducaoScalarWhereInput
    data: XOR<ReproducaoUpdateManyMutationInput, ReproducaoUncheckedUpdateManyWithoutMusicaInput>
  }

  export type usuariosCreateWithoutReprodicoesInput = {
    nome: string
    email: string
    photo?: string | null
    privilegios?: $Enums.TipoPrivilegio
  }

  export type usuariosUncheckedCreateWithoutReprodicoesInput = {
    id?: number
    nome: string
    email: string
    photo?: string | null
    privilegios?: $Enums.TipoPrivilegio
  }

  export type usuariosCreateOrConnectWithoutReprodicoesInput = {
    where: usuariosWhereUniqueInput
    create: XOR<usuariosCreateWithoutReprodicoesInput, usuariosUncheckedCreateWithoutReprodicoesInput>
  }

  export type MusicaCreateWithoutReproducoesInput = {
    nome: string
    genero: string
    album: string
    artista: ArtistaCreateNestedOneWithoutMusicasInput
  }

  export type MusicaUncheckedCreateWithoutReproducoesInput = {
    id?: number
    nome: string
    genero: string
    album: string
    artistaId: number
  }

  export type MusicaCreateOrConnectWithoutReproducoesInput = {
    where: MusicaWhereUniqueInput
    create: XOR<MusicaCreateWithoutReproducoesInput, MusicaUncheckedCreateWithoutReproducoesInput>
  }

  export type usuariosUpsertWithoutReprodicoesInput = {
    update: XOR<usuariosUpdateWithoutReprodicoesInput, usuariosUncheckedUpdateWithoutReprodicoesInput>
    create: XOR<usuariosCreateWithoutReprodicoesInput, usuariosUncheckedCreateWithoutReprodicoesInput>
    where?: usuariosWhereInput
  }

  export type usuariosUpdateToOneWithWhereWithoutReprodicoesInput = {
    where?: usuariosWhereInput
    data: XOR<usuariosUpdateWithoutReprodicoesInput, usuariosUncheckedUpdateWithoutReprodicoesInput>
  }

  export type usuariosUpdateWithoutReprodicoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
  }

  export type usuariosUncheckedUpdateWithoutReprodicoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    privilegios?: EnumTipoPrivilegioFieldUpdateOperationsInput | $Enums.TipoPrivilegio
  }

  export type MusicaUpsertWithoutReproducoesInput = {
    update: XOR<MusicaUpdateWithoutReproducoesInput, MusicaUncheckedUpdateWithoutReproducoesInput>
    create: XOR<MusicaCreateWithoutReproducoesInput, MusicaUncheckedCreateWithoutReproducoesInput>
    where?: MusicaWhereInput
  }

  export type MusicaUpdateToOneWithWhereWithoutReproducoesInput = {
    where?: MusicaWhereInput
    data: XOR<MusicaUpdateWithoutReproducoesInput, MusicaUncheckedUpdateWithoutReproducoesInput>
  }

  export type MusicaUpdateWithoutReproducoesInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    artista?: ArtistaUpdateOneRequiredWithoutMusicasNestedInput
  }

  export type MusicaUncheckedUpdateWithoutReproducoesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    artistaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoCreateManyUsuarioInput = {
    data_escuta?: Date | string
    musicaId: number
  }

  export type ReproducaoUpdateWithoutUsuarioInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    musica?: MusicaUpdateOneRequiredWithoutReproducoesNestedInput
  }

  export type ReproducaoUncheckedUpdateWithoutUsuarioInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    musicaId?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoUncheckedUpdateManyWithoutUsuarioInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    musicaId?: IntFieldUpdateOperationsInput | number
  }

  export type MusicaCreateManyArtistaInput = {
    id?: number
    nome: string
    genero: string
    album: string
  }

  export type MusicaUpdateWithoutArtistaInput = {
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    reproducoes?: ReproducaoUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
    reproducoes?: ReproducaoUncheckedUpdateManyWithoutMusicaNestedInput
  }

  export type MusicaUncheckedUpdateManyWithoutArtistaInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    genero?: StringFieldUpdateOperationsInput | string
    album?: StringFieldUpdateOperationsInput | string
  }

  export type ReproducaoCreateManyMusicaInput = {
    data_escuta?: Date | string
    usuarioId: number
  }

  export type ReproducaoUpdateWithoutMusicaInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: usuariosUpdateOneRequiredWithoutReprodicoesNestedInput
  }

  export type ReproducaoUncheckedUpdateWithoutMusicaInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }

  export type ReproducaoUncheckedUpdateManyWithoutMusicaInput = {
    data_escuta?: DateTimeFieldUpdateOperationsInput | Date | string
    usuarioId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}