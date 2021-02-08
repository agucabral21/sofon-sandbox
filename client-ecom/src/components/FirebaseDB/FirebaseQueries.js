import { storeDB } from "./FirebaseDS";
import { testData } from "./FirebaseTestData";

function fetchCategories() {
  const items = storeDB.collection("category");
  return new Promise((resolve, reject) => {
    items
      .get()
      .then((result) => {
        if (result.size === 0) {
          reject("No hay resultados");
        }
        let res = result.docs.map((d) => {
          var ret = d.data();
          return ret;
        });
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function fetchOrders() {
  const items = storeDB.collection("orders");
  return new Promise((resolve, reject) => {
    items
      .get()
      .then((result) => {
        if (result.size === 0) {
          reject("No hay resultados");
        }
        let res = result.docs.map((d) => {
          var ret = d.data();
          Object.assign(ret, { id: d.id });
          return ret;
        });
        resolve(res);
      })
      .catch((e) => {
        reject(e);
      });
  });
}

function fetchItems(category) {
  const items = storeDB.collection("items");
  return new Promise((resolve, reject) => {
    //TODO: el codigo este esta todo repetido, buscar la manera que filtre o no por category sin repetirlo
    if (category === "all") {
      items
        .get()
        .then((result) => {
          if (result.size === 0) {
            reject("No hay resultados");
          }
          let res = result.docs.map((d) => {
            var ret = d.data();
            //console.log(d)
            Object.assign(ret, { id: d.id });
            return ret;
          });
          resolve(res);
        })
        .catch((e) => {
          //console.log(e)
          reject(e);
        });
    } else {
      items
        .where("categoryId", "==", category)
        .get()
        .then((result) => {
          if (result.size === 0) {
            reject("No hay resultados");
          }
          let res = result.docs.map((d) => {
            var ret = d.data();
            //console.log(d)
            Object.assign(ret, { id: d.id });
            return ret;
          });
          resolve(res);
        })
        .catch((e) => {
          //console.log(e)
          reject(e);
        });
    }
  });
}

function fetchItemById(id) {
  const items = storeDB.collection("items");
  return new Promise((resolve, reject) => {
    items
      .doc(id)
      .get()
      .then((d) => {
        if (d.exists) {
          var ret = d.data();
          Object.assign(ret, { id: d.id });
          resolve(ret);
        } else {
          reject("NotFound");
        }
      });
  });
}

function fetchOrderById(id) {
  const items = storeDB.collection("orders");
  return new Promise((resolve, reject) => {
    items
      .doc(id)
      .get()
      .then((d) => {
        if (d.exists) {
          var ret = d.data();
          Object.assign(ret, { id: d.id });
          resolve(ret);
        } else {
          reject("NotFound");
        }
      });
  });
}

const storeTestData = () => {
  console.log(testData);
  //Descomentar en caso de querer cargar la base de datos
  //testData.map((item) => storeItem(item));
};

function storeItem(item) {
  let id = item.id;
  storeDB.collection("items").doc(id).set(item);
}

function storeOrder(order) {
  var id = new Date().valueOf();
  console.log(order);
  //console.log(item);
  return storeDB
    .collection("orders")
    .doc(id.toString() + "-" + order.buyer.phone)
    .set(order);
}

export {
  fetchItems,
  fetchItemById,
  storeItem,
  storeTestData,
  storeOrder,
  fetchCategories,
  fetchOrders,
  fetchOrderById,
};
