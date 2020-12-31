"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.FoodListComponent = void 0;
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FoodListComponent = /** @class */ (function () {
    function FoodListComponent() {
        this.foodForm = new forms_1.FormGroup({
            foodName: new forms_1.FormControl(''),
            foodCalories: new forms_1.FormControl('')
        });
        this.DailyMenu = [];
        this.units = 1;
        this.totalCalories = 0;
        this.foods = [
            {
                name: "Pizza",
                calories: 400,
                image: "https://i.imgur.com/eTmWoAN.png",
                quantity: 0
            },
            {
                name: "Salad",
                calories: 150,
                image: "https://i.imgur.com/DupGBz5.jpg",
                quantity: 0
            },
            {
                name: "Sweet Potato",
                calories: 120,
                image: "https://i.imgur.com/hGraGyR.jpg",
                quantity: 0
            },
            {
                name: "Gnocchi",
                calories: 500,
                image: "https://i.imgur.com/93ekwW0.jpg",
                quantity: 0
            },
            {
                name: "Pot Roast",
                calories: 350,
                image: "https://i.imgur.com/WCzJDWz.jpg",
                quantity: 0
            },
            {
                name: "Lasagna",
                calories: 750,
                image: "https://i.imgur.com/ClxOafl.jpg",
                quantity: 0
            },
            {
                name: "Hamburger",
                calories: 400,
                image: "https://i.imgur.com/LoG39wK.jpg",
                quantity: 0
            },
            {
                name: "Pad Thai",
                calories: 475,
                image: "https://i.imgur.com/5ktcSzF.jpg",
                quantity: 0
            },
            {
                name: "Almonds",
                calories: 75,
                image: "https://i.imgur.com/JRp4Ksx.jpg",
                quantity: 0
            },
            {
                name: "Bacon",
                calories: 175,
                image: "https://i.imgur.com/7GlqDsG.jpg",
                quantity: 0
            },
            {
                name: "Hot Dog",
                calories: 275,
                image: "https://i.imgur.com/QqVHdRu.jpg",
                quantity: 0
            },
            {
                name: "Chocolate Cake",
                calories: 490,
                image: "https://i.imgur.com/yrgzA9x.jpg",
                quantity: 0
            },
            {
                name: "Wheat Bread",
                calories: 175,
                image: "https://i.imgur.com/TsWzMfM.jpg",
                quantity: 0
            },
            {
                name: "Orange",
                calories: 85,
                image: "https://i.imgur.com/abKGOcv.jpg",
                quantity: 0
            },
            {
                name: "Banana",
                calories: 175,
                image: "https://i.imgur.com/BMdJhu5.jpg",
                quantity: 0
            },
            {
                name: "Yogurt",
                calories: 125,
                image: "https://i.imgur.com/URhdrAm.png",
                quantity: 0
            }
        ];
        this.filterPost = '';
    }
    FoodListComponent.prototype.AddNewFood = function (foodName, foodCalories) {
        var alimento = {
            name: foodName.value,
            calories: foodCalories.value,
            image: 'https://picsum.photos/200/200',
            quantity: 0
        };
        this.foods.push(alimento);
    };
    FoodListComponent.prototype.ngOnInit = function () {
    };
    FoodListComponent.prototype.sum = function (calories, foodName, units) {
        this.totalCalories += Number(calories);
        var exist = false;
        for (var _i = 0, _a = this.DailyMenu; _i < _a.length; _i++) {
            var menu = _a[_i];
            if (menu.name === foodName) {
                exist = true;
                menu.units += units;
                break;
            }
        }
        if (!exist) {
            this.DailyMenu.push({ 'name': foodName, 'calories': calories, 'units': units });
        }
    };
    FoodListComponent = __decorate([
        core_1.Component({
            selector: 'app-food-list',
            templateUrl: './food-list.component.html',
            styleUrls: ['./food-list.component.scss']
        })
    ], FoodListComponent);
    return FoodListComponent;
}());
exports.FoodListComponent = FoodListComponent;
