import '@styles/globals.css'
import Nav from '@components/Nav.jsx'
import Provider from '@components/Provider.jsx'

export const metadata = {
    title: 'Promptopia',
    description: 'Discover & Share AI Prompts'
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <link rel="icon" href="/assets/images/logo.svg" />
            <body>
                <Provider>
                    <div className='main'>
                        <div className='gradient' />
                    </div>
                    <main className='app'>
                        <Nav />
                        {children}
                    </main>
                </Provider>
            </body>
        </html>
    )
}
