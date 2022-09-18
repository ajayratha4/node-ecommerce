const response = ({ status, data, error, message }) => {
  return {
    status,
    data,
    error,
    message,
  };
};

module.exports = response;
