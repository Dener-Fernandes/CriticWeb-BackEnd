"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Review = void 0;
const typeorm_1 = require("typeorm");
const User_1 = require("./User");
const Movie_1 = require("./Movie");
let Review = class Review {
};
exports.Review = Review;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ name: "review_id" }),
    __metadata("design:type", Number)
], Review.prototype, "reviewId", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Review.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)("float"),
    __metadata("design:type", Number)
], Review.prototype, "rating", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "is_liked" }),
    __metadata("design:type", Boolean)
], Review.prototype, "isLiked", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "user_id" }),
    __metadata("design:type", Number)
], Review.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: "movie_id" }),
    __metadata("design:type", Number)
], Review.prototype, "movieId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.reviews),
    (0, typeorm_1.JoinColumn)({ name: "user_id" }) // Especifica a coluna de junção para o relacionamento com User
    ,
    __metadata("design:type", User_1.User)
], Review.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Movie_1.Movie, (movie) => movie.reviews),
    (0, typeorm_1.JoinColumn)({ name: "movie_id" }) // Especifica a coluna de junção para o relacionamento com Movie
    ,
    __metadata("design:type", Movie_1.Movie)
], Review.prototype, "movie", void 0);
exports.Review = Review = __decorate([
    (0, typeorm_1.Entity)()
], Review);
//# sourceMappingURL=Review.js.map