import Sample from "../../model/Sample.js";
const sampleGetHandler = async (request, reply) => {
  let response = {};
  try {
    const data = await Sample.query(request.knex).select("*");
    console.log(data, "Dataaaa");
    response = { success: true, data };
  } catch (error) {
    console.log(error, "Error while getting data");
    response = { success: false, data: [] };
  }
  return reply.send(response);
};
export { sampleGetHandler };
