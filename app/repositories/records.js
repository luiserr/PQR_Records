import db from '../../connection/db';

export default async function getRecords() {
  const sql = `select * from records as r where r.status = 'new' order by r.id asc;`;
  try {
    const connection = await db();
    const result = connection.query(sql);
    connection.end();
    return result;
  }catch (e) {
    return [];
  }
}