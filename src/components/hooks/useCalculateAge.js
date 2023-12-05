// useCalculateAge.js

const useCalculateAge = () => {
  const calculateAge = (birthDate) => {
    if (!birthDate) {
      return null;
    }

    const today = new Date();
    const birthDateYear = parseInt(birthDate.split("-")[0], 10) || 0;
    const birthDateMonth = parseInt(birthDate.split("-")[1], 10) || 0;
    const birthDateDay = parseInt(birthDate.split("-")[2], 10) || 0;
    let age = today.getFullYear() - birthDateYear;

    if (
      today.getMonth() < birthDateMonth ||
      (today.getMonth() === birthDateMonth && today.getDate() < birthDateDay)
    ) {
      age--;
    }

    return age;
  };

  return calculateAge;
};

export default useCalculateAge;
