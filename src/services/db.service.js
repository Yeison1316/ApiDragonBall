import { Sequelize } from "sequelize";
/**
 * driver :// usuario : contraseña @ ip_bd : puerto / nombre_bd
 */
//export const sequelize = new Sequelize("postgres://postgres:E27KYbtWQH4VH9bHz1PFFcT9vS7TKlni@dpg-ct2a3bhopnds73fqjm9g-a:5432/dragonball")
export const sequelize = new Sequelize('postgres://admin:E27KYbtWQH4VH9bHz1PFFcT9vS7TKlni@dpg-ct2a3bhopnds73fqjm9g-a.oregon-postgres.render.com:5432/dragonball', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true, // Habilitar SSL
      rejectUnauthorized: false // Esto es necesario si el certificado no es válido, puede ser útil en entornos de desarrollo
    }
  }
});

