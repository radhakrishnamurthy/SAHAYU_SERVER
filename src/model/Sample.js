import { Model } from "objection";
class Sample extends Model {
  static get tableName() {
    return "sample";
  }
  // Optional JSON schema. This is not the database schema!
  // No tables or columns are generated based on this. This is only
  // used for input validation. Whenever a model instance is created
  // either explicitly or implicitly it is checked against this schema.
  // See http://json-schema.org/ for more info.
  static get jsonSchema() {
    return {
      type: "object",
      required: ["firstName", "lastName"],

      properties: {
        id: { type: ["integer", "null"] },
        age: { type: ["integer", "null"] },
        name: { type: "string", minLength: 1, maxLength: 255 },
        description: { type: "string" },
        created_at: { type: "string" },
        updated_at: { type: "string" },
      },
    };
  }
}
export default Sample;
