import Head from 'next/head'
import MainContainer from '../components/MainContainer';

const Contacts = ({ users }: { users: { id: string, name: string }[] }) => {
    return (
        <MainContainer keywords='contacts' title='Контакты'>
            <h1>
                Контакты
            </h1>

            <ul>
                {users.map(us =>
                    <li key={us.id}>
                        <div>{us.name}</div>
                    </li>
                )}
            </ul>
        </MainContainer>
    )
}

export default Contacts;

export async function getStaticProps(context: string) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await response.json();

    return {
        props: { users },
    }

}