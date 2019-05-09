function main(params) {
  if (!params.name || !params.time) {
    return Promise.reject({ error: "no time or name" });
  }

  return {
    doc: {
      createdAt: new Date(),
      name: params.name,
      time: params.time
    }
  };
}
