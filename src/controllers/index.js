
const index = async (req, res) => {
  try {
    
    res.render("pages/index");

  } catch (error) {
    res.status(500).send("Error al cargar los datos");
  }
};

const clasificacion = async (req, res) => {
  try {
    
    res.render("pages/clasificacion")

  } catch (error) {
    res.status(500).send("Error al cargar los datos");
  }
};

const calendar = async (req, res) => {
  try {
    
    res.render("pages/calendar")

  } catch (error) {
    res.status(500).send("Error al cargar los datos");
  }
}

export default {
  index,
  clasificacion,
  calendar
};