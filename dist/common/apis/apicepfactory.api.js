"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCepFactory = void 0;
const cepfactory_api_1 = require("./cepfactory.api");
const apicep_api_1 = require("./apicep.api");
class ApiCepFactory extends cepfactory_api_1.CepFactory {
    factoryMethod() {
        return new apicep_api_1.ApiCep();
    }
}
exports.ApiCepFactory = ApiCepFactory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpY2VwZmFjdG9yeS5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbW9uL2FwaXMvYXBpY2VwZmFjdG9yeS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EscURBQThDO0FBQzlDLDZDQUFzQztBQUV0QyxNQUFhLGFBQWMsU0FBUSwyQkFBVTtJQUNsQyxhQUFhO1FBQ2hCLE9BQU8sSUFBSSxtQkFBTSxFQUFFLENBQUM7SUFDeEIsQ0FBQztDQUNKO0FBSkQsc0NBSUMifQ==