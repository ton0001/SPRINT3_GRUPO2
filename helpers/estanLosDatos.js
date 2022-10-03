const estanLosDatos = (campos) => {
  let ret = true;
  if (
    !campos.email ||
    !campos.username ||
    !campos.password ||
    !campos.firstname ||
    !campos.lastname ||
    !campos.profilepic ||
    !campos.role
  ) {
    ret = false;
  }
  return ret;
};
