var isSubscribe = true;
var isWrap = true;
var formFileds = {};
var formName = "formField";

var isObjectInLocalStorage;

var formFieldFromLocalStorage = localStorage.getItem('"formField"');

var clearStorage = (function () {
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        RemoveItemByKey(`${formName}`);
        isObjectInLocalStorage = false;
    }
})();

var checkInStorage = (function () {
    if (formFieldFromLocalStorage == 'undefined' || formFieldFromLocalStorage == null) {
        isObjectInLocalStorage = false;
    }
    else {
        isObjectInLocalStorage = true;
    }
    return isObjectInLocalStorage;
})();

if (isObjectInLocalStorage) {
    try {
        formFieldFromLocalStorage = ParseFromObjToString(formFieldFromLocalStorage);
    } catch (error) {
        alert(error);
    }
    isWrap = formFieldFromLocalStorage.isWrap;

    deserializeForm(formFieldFromLocalStorage);
}
else {

}
function deserializeForm(formFields) {

    try {

        document.querySelector('.control__input').value = formFields.fieldLabel;
        document.querySelector('.control__select').value = formFields.choosenOpt;

        if (formFieldFromLocalStorage.isSubscribe) {
            document.querySelectorAll('[name = isSubscribe]')[0].checked = true;
            document.querySelectorAll('[name = isSubscribe]')[1].checked = false;
        }
        else {
            document.querySelectorAll('[name = isSubscribe]')[0].checked = false;
            document.querySelectorAll('[name = isSubscribe]')[1].checked = true;
        }

        document.querySelector('.isWrap__item').checked = isWrap;

    }
    catch (error) {
        alert(error);
    }

    return formFields;
}

function Save() {

    var fieldLabel = document.querySelector('.control__input').value;

    var choosenOpt = document.querySelector('.control__select').value;

    formFileds = {
        fieldLabel: fieldLabel,
        choosenOpt: choosenOpt,
        isSubscribe: this.isSubscribe,
        isWrap: this.isWrap
    };
    SaveToLocalStorage(formName, formFileds);
    isObjectInLocalStorage = true;
}
function Subscribe() {
    isSubscribe = true;
    console.log(isSubscribe);
}
function Unsubscribe() {
    isSubscribe = false;
    console.log(isSubscribe);
}
function Wrap() {

    isWrap = !isWrap;
    console.log(isWrap);
}

function SaveToLocalStorage(key, value) {
    localStorage.setItem(JSON.stringify(key), JSON.stringify(value));
}
function GetItemByKey(key) {
    return localStorage.getItem(JSON.stringify(key));
}
function RemoveItemByKey(key) {
    localStorage.removeItem(JSON.stringify(key));
}
function ParseFromObjToString(stringObject) {
    return JSON.parse(stringObject);
}