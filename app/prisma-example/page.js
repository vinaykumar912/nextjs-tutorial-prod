import prisma from "@/utils/db";

const prismaHandlers = async () => {
  console.log("prisma example");
  // await prisma.task.create({
  //   data: {
  //     content: "Wake up",
  //   },
  // });

  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return allTasks;
};

const PrismaExample = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No Tasks to show...</h2>;
  }
  return (
    <div>
      <h1 className="text-7xl">PrismaExample</h1>
      {tasks.map((res) => {
        return (
          <h2 key={res.id} className="text-xl py-2">
            {res.content}
          </h2>
        );
      })}
    </div>
  );
};

export default PrismaExample;
