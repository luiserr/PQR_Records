import db from '../../connection/db';

export default async function newRecord(fileName, filePath, uid, typeDni, dni, phone) {
  const sql = `insert into records(fileName, filePath, uid, typeDni, dni, phone)
                values('${fileName}', '${filePath}', '${uid}', '${typeDni}', '${dni}', '${phone}');`;
  try {
    const connection = await db();
    const result = await connection.query(sql);
    return result.affectedRows > 0;
  } catch (e) {
    return false;
  }
}