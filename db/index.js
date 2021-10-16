import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favorite.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS favorite (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          urlImage TEXT NOT NULL,
          description TEXT NOT NULL,
          buttonTitle REAL NOT NULL,
          categoryID REAL NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertAddress = ( id, title, urlImage, description, buttonTitle, categoryID ) => {
  console.log(title);
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO favorite ( id, title, urlImage, description, buttonTitle, categoryID) VALUES (?, ?, ?, ?, ?, ?)',
        [id, title, urlImage, description, buttonTitle, categoryID],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchAddresses = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favorite',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}