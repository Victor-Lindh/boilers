import Head from 'next/head'
import styles from '../styles/Home.module.css'
import TextBox from '../src/components/TextBox/TextBox'
import CreateButton from '../src/components/CreateButton/CreateButton'
import Select from '../src/components/Select/Select'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Boiler Ipsum</title>
        <meta name="description" content="Boilerplates for array and objects" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateButton />
      <TextBox text="const sports = ['Football', 'Soccer', 'Ice Hockey']" />
      <Select
        options={[
          { value: 'value1', label: 'Value 1' },
          { value: 'value2', label: 'Value 2' },
        ]}
      />
    </div>
  )
}
