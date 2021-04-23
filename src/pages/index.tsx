// Tradicional SPA

// SSR  ->> getServerSideProps
//SSG -->>getStaticProps
export default function Home(props) {
  return (
    <div>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes');
  const data = await response.json()


  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8 // a página vai ser atualizada a cada 8 horas
  }
}