import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

const courses = [
  {
    id: 1,
    title: "Programación Backend",
    capacity: 25
  },
  {
    id: 2,
    title: "Bases de Datos",
    capacity: 30
  },
  {
    id: 3,
    title: "Desarrollo Web",
    capacity: 20
  }
];

app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({
    status: "ok"
  });
});

app.get("/courses", (req: Request, res: Response) => {
  res.status(200).json(courses);
});

app.get("/courses/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id);

  const course = courses.find((course) => course.id === id);

  if (!course) {
    return res.status(404).json({
      error: "Curso no encontrado"
    });
  }

  return res.status(200).json(course);
});

app.get("/version", (req: Request, res: Response) => {
  res.status(200).json({
    version: "1.0.0"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor funcionando en http://localhost:${PORT}`);
});