const updateTotalAction = (number) => {
  return {
    type: "UPDATE_TOTAL",
    total: number,
  };
};

export default updateTotalAction;
