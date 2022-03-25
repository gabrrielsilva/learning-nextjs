import { GetStaticProps } from 'next';

export default function Home({ tasks, date }) {
  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </ul>
      <h1>{date}</h1>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(
//     'https://jsonplaceholder.typicode.com/todos'
//   );

//   const data = await response.json();
//   const task = data.map((item) => item.title);

//   return {
//     props: {
//       tasks: task,
//       date: new Date().toISOString(),
//     },
//   };
// };

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');

  const data = await response.json();
  const task = data.map((item) => item.title);

  return {
    props: {
      tasks: task,
      date: new Date().toISOString(),
    },
    revalidate: 60 * 60 * 4, //4 hours
  };
};
