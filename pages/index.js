import Head from 'next/head'
import App from '../src/components/App'

export default function Home () {
  return (
    <>
      <Head>
        <title>Boiler Ipsum</title>
        <meta name="description" content="Boilerplates for array and objects" />
      </Head>
      <App />
    </>
    // <div className={styles.container}>
    //   <Head>
    //     <title>Boiler Ipsum</title>
    //     <meta name="description" content="Boilerplates for array and objects" />
    //   </Head>
    //   <section className={styles.selectGroup}>
    //     <Select
    //       options={[
    //         { value: 'arrays', label: 'Arrays' },
    //         { value: 'objects', label: 'Objects' },
    //       ]}
    //       />
    //     <Select
    //       options={[
    //         { value: '5', label: 'First 5 items' },
    //         { value: '10', label: 'First 10 items' },
    //       ]}
    //       label='Partial data'
    //       />
    //   </section>
    //   <TextBox data={data.NBA_TEAMS} />
    // </div>
  )
}
