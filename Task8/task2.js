function Machine(power) {
    var self = this;

    self._power = power;
    self._enabled = false;


    self.enable = function () {
        self._enabled = true;
        return self._enabled;
    };

    self.disable = function () {
        self._enabled = false;
        return self._enabled;

    };
}

function Fridge(power) {
    var self = this;

    Machine.call(this, power);

    var isEnabled = false;

    var foodAdd = [];
    var isValidFood = true;

    self.addFood = function (foodName) {
        var args = arguments;
        if (args.length == 1) {
            if (self.validFood()) {
                foodAdd.push(foodName);
                return self.getFood();
            }
            else {
                return self.getFood();

            }
        }
        if ((args.length + foodAdd.length) > (parseInt(power) / 100)) {
            return self.getFood();
        }
        else {
            for (var index = 0; index < args.length; index++) {
                foodAdd.push(args[index]);
            }
            return self.getFood();
        }
    }

    self.getFood = function getFood() {


        return foodAdd.slice();


    }

    self.validFood = function (params) {
        if ((arguments.length + foodAdd.length) > (parseInt(self.power) / 100)) {
            isValidFood = false;
            return isValidFood;
        }
        else {
            isValidFood = true;
            return isValidFood;
        }
    }
}

var fridge = new Fridge(500);
console.log(fridge.enable());
console.log(fridge._power);
fridge.addFood("lols", '123', 13);
fridge.addFood("lols");

var fridgeFood = fridge.getFood();
fridgeFood.push('вилка', 'ложка');

console.log(fridge.getFood());
