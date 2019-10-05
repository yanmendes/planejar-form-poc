export default {
  fields: {
    name: {
      type: "text",
      key: "name"
    },
    marital_status: {
      type: "select",
      key: "marital_status",
      opts: [
        { key: "solteiro", label: "Solteiro(a)" },
        { key: "casado", label: "Casado(a)" },
        { key: "divorciado", label: "Divorciado(a)" }
      ]
    },
    age: {
      type: "number",
      key: "age"
    },
    city: {
      type: "autocomplete",
      key: "city"
    }
  }
}
