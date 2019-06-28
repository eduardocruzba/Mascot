import Realm from 'realm';
import Session from './session';
import Dog from './dog';

function realmHandler (callback) {
    Realm.open({schema: [Session, Dog]})
    .then(callback)
}

function add(type, data) {
    realmHandler((realm) => {
        realm.write(() => {
            realm.create(type, data);
        })  
    })
}

function get(type, callback) {
    realmHandler((realm) => {
        return callback(realm.objects(type))
    })
}

function addListener(type, callback) {
    realmHandler((realm) => {
        realm.objects(type).addListener(callback);
    })
}
function removeListeners(type){
    realmHandler((realm) =>{
        realm.removeAllListeners();
    })
}
export default {
    realmHandler,
    add,
    get,
    addListener,
    removeListeners,
}    
