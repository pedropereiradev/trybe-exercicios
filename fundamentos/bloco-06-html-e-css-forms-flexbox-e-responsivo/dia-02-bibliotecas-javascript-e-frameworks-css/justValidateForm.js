import JustValidate from "just-validate";

const validation = new JustValidate("#form");

validation
  .addField("#name", [
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 40,
    },
    {
      rule: "required",
      errorMessage: "Nome é necessário",
    },
  ])
  .addField("#email", [
    {
      rule: "minLength",
      value: 10,
    },
    {
      rule: "maxLength",
      value: 50,
    },
    {
      rule: "required",
      errorMessage: "Email é necessário",
    },
    {
      rule: "email",
      errorMessage: "Email inválido!",
    },
  ]);
