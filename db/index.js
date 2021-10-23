//sql
import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('favorites.db');

export const init = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
        tx.executeSql(`CREATE TABLE IF NOT EXISTS favorites (
          id INTEGER PRIMARY KEY NOT NULL,
          title TEXT NOT NULL,
          urlImage TEXT NOT NULL,
          description TEXT NOT NULL,
          buttonTitle TEXT NOT NULL,
          categoryID TEXT NOT NULL,
          related TEXT NOT NULL
        )`,
        [],
        () => resolve(),
        (_, err) => reject(err),
      )
    });
  });
}

export const insertFavorite = ( item ) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'INSERT INTO favorites ( id, title, urlImage, description, buttonTitle, categoryID, related) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [item.id, item.title, item.urlImage, item.description, item.buttonTitle, item.categoryID, item.related],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const deleteFavorite = ( id ) => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `DELETE FROM favorites WHERE id = ${id}`,
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}

export const fetchFavorite = () => {
  return new Promise((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        'SELECT * FROM favorites',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error),
      )
    })
  })
}