const md5 = require("spark-md5");

function main(params) {
  return {
    entries: params.rows.map(row => {
      return {
        name: row.doc.name,
        time: row.doc.time,
        createdAt: row.doc.createdAt
      };
    })
  };
}
