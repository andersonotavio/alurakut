import MainGrid from '../src/Components/MainGrid'
import Box from '../src/Components/Box'
import { AlurakutMenu, OrkutNostalgicIconSet } from '../src/lib/AlurakutComponents'
import { ProfileRelationsBoxWrapper } from '../src/Components/ProfileRelations'

function ProfileSideBar({ gitHubUser }){
  return (
    <Box>
        <img src={`https://github.com/${gitHubUser}.png`} style={{ borderRadius: '8px'}} />
    </Box>
  )
}

export default function Home() {

  const gitHubUser = 'andersonotavio'
  const pessoasFavoritas = [
    'juunegreiros',
    'omariosouto',
    'SpruceGabriela',
    'rafaballerini',
    'isadorastan',
    'gustavoguanabara',
  ]

  return (
  <>
    <AlurakutMenu />
    <MainGrid>
      <div className="profileArea" style={{gridArea: "profileArea"}}>
        <ProfileSideBar gitHubUser={gitHubUser}/>
      </div>
      <div className="wlcomeArea" style={{gridArea: "welcomeArea"}}>
        <Box className="title">
          Bem Vindo (a)
        </Box>
        <OrkutNostalgicIconSet />
      </div>
      <div className="profileRelationsArea" style={{gridArea: "profileRelationsArea"}}>
        <ProfileRelationsBoxWrapper>
        <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>

        </ProfileRelationsBoxWrapper>
        
        </div>
    </MainGrid>
  </>
  )
}
