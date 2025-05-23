import Badge from "@/shared/components/ui/badge";
import { ModeToggle } from "@/shared/components/ui/mode-toggle";
import { ThemeProvider } from "@/shared/providers/theme-provider";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/shared/components/ui/accordion"
import { TypographyH1, TypographyLead } from "@/shared/components/ui/typography";
import { Table, TableBody, TableCell, TableHeader, TableRow } from "@/shared/components/ui/table"
import { Button } from "@/shared/components/ui/button";

import { FaPython, FaJsSquare, FaReact, FaVuejs, FaDocker, FaGithub } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiPhp } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { MdOutgoingMail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa6";

export default function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
      <div id="curriculo" className="bg-background text-foreground mx-auto max-w-4xl px-12 py-10 overflow-hidden">
        <div className="flex justify-between items-center mb-4">
          <TypographyH1>Mathew Vieira Bezerra</TypographyH1>
          <ModeToggle />
        </div>

        <div className="flex flex-wrap gap-1 mb-3">
          <Badge variant={'default'}> Desenvolvedor Full Stack</Badge>
          <Badge variant={'default'}><FaJsSquare /> JavaScript</Badge>
          <Badge variant={'default'}><FaPython /> Python</Badge>
          <Badge variant={'default'}><BiLogoTypescript /> TypeScript</Badge>
          <Badge variant={'default'}><SiPhp /> PHP</Badge>
          <Badge variant={'default'}><FaReact /> React</Badge>
          <Badge variant={'default'}><FaVuejs /> Vue.js</Badge>
          <Badge variant={'default'}><FaDocker /> Docker</Badge>
          <Badge variant={'default'}><DiMsqlServer /> SQL Server</Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-8">
          <Badge variant={'outline'}><MdOutgoingMail /><a href="mailto:mvieirabezerra@gmail.com">mvieirabezerra@gmail.com</a></Badge>
          <Badge variant={'outline'}><IoLogoWhatsapp /><a href="tel:+5585985952192">(85) 98595-2192</a></Badge>
          <Badge variant={'outline'}><FaLinkedin /><a href="https://www.linkedin.com/in/mathewvieira">LinkedIn</a></Badge>
          <Badge variant={'outline'}><FaGithub /><a href="https://github.com/mathewvieira">Portfólio</a></Badge>
        </div>

        <Accordion type="multiple" defaultValue={['item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6', 'item-7', 'item-8']} className="w-full">
          <AccordionItem value="item-1" className="mb-8 pb-8">
            <AccordionTrigger>Sobre</AccordionTrigger>
            <AccordionContent>
              <TypographyLead>Desenvolvedor Full Stack com experiência na criação de aplicações web eficientes, responsivas e escaláveis. Tenho sólida atuação no desenvolvimento frontend e backend, com foco em boas práticas, performance e qualidade de código. Atualmente, sou estudante de Sistemas de Informação, com habilidades adicionais em design digital, edição de vídeos e criação de conteúdo para mídias sociais.</TypographyLead>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="mb-8 pb-8">
            <AccordionTrigger>Habilidades Técnicas</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Linguagens</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'default'}>JavaScript</Badge>
                      <Badge variant={'default'}>TypeScript</Badge>
                      <Badge variant={'default'}>Python</Badge>
                      <Badge variant={'default'}>PHP</Badge>
                      <Badge variant={'default'}>HTML</Badge>
                      <Badge variant={'default'}>CSS</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Frameworks e Bibliotecas</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'secondary'}>Vue.js</Badge>
                      <Badge variant={'secondary'}>Nuxt.js</Badge>
                      <Badge variant={'secondary'}>React</Badge>
                      <Badge variant={'secondary'}>Next.js</Badge>
                      <Badge variant={'secondary'}>Express.js</Badge>
                      <Badge variant={'secondary'}>Laravel</Badge>
                      <Badge variant={'secondary'}>Tailwind CSS</Badge>
                      <Badge variant={'secondary'}>Bootstrap</Badge>
                      <Badge variant={'secondary'}>Sass</Badge>
                      <Badge variant={'secondary'}>Less</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Ferramentas</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'default'}>Docker</Badge>
                      <Badge variant={'default'}>Git</Badge>
                      <Badge variant={'default'}>WordPress</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Bancos de Dados</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'secondary'}>SQL Server</Badge>
                      <Badge variant={'secondary'}>MySQL</Badge>
                      <Badge variant={'secondary'}>PostgreSQL</Badge>
                      <Badge variant={'secondary'}>NoSQL</Badge>
                      <Badge variant={'secondary'}>Firebird</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Metodologias</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'default'}>Agile (Scrum, Kanban, Scrumban)</Badge>
                      <Badge variant={'default'}>POO</Badge>
                      <Badge variant={'default'}>Design Patterns</Badge>
                      <Badge variant={'default'}>Testes Unitários</Badge>
                      <Badge variant={'default'}>Código Limpo</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="mb-8 pb-8">
            <AccordionTrigger>Skills & Ferramentas</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Principais Tecnologias</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'default'}>JavaScript</Badge>
                      <Badge variant={'default'}>Python</Badge>
                      <Badge variant={'default'}>TypeScript</Badge>
                      <Badge variant={'default'}>PHP</Badge>
                      <Badge variant={'default'}>Docker</Badge>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Linguagens</TableCell>
                    <TableCell className="flex gap-1">
                      <Badge variant={'secondary'}>Português | Fluente</Badge>
                      <Badge variant={'secondary'}>Inglês | Intermediário</Badge>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="mb-8 pb-8">
            <AccordionTrigger>Experiências</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-5">
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Compass UOL - Engenheiro de Dados
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Dez 2024 - Maio 2025</p>
                        </div>
                        <div className="mb-2">
                          <strong>Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Core Languages: SQL, Python (ETL, Pandas, Numpy, Matplotlib...).</li>
                            <li>Componentes de Cloud: IAM, EC2, VPC, Lambda, Step Function.</li>
                            <li>Serviços analíticos: EMR, Glue, Athena, QuickSight.</li>
                            <li>Processamento de dados com Spark.</li>
                            <li>Visualização e modelagem de dados.</li>
                            <li>Outras atividades relacionadas ao curso de Sistemas de Informação.</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>Python</Badge>
                            <Badge variant={'secondary'}>Amazon Web Services (AWS)</Badge>
                            <Badge variant={'secondary'}>Git & GitHub</Badge>
                            <Badge variant={'secondary'}>Docker</Badge>
                            <Badge variant={'secondary'}>Spark</Badge>
                            <Badge variant={'secondary'}>SQL</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          LabSpec Analytics - Desenvolvedor FullStack | React/Next.js/TypeScript
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Dez 2024 - Maio 2025</p>
                        </div>
                        <div className="mb-2">
                          <strong>Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Refatorei o código aplicando boas práticas, assim melhorando a manutenção e flexibilidade do projeto.</li>
                            <li>Melhorei a qualidade do processo de desenvolvimento para toda a equipe.</li>
                            <li>Criei dashboards, gráficos e relatórios personalizáveis e interativos.</li>
                            <li>Administrei e liderei a equipe buscando aumentar o valor do produto entregue aos clientes.</li>
                            <li>Desenvolvi o sistema de login.</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>React</Badge>
                            <Badge variant={'secondary'}>Next.js</Badge>
                            <Badge variant={'secondary'}>JavaScript</Badge>
                            <Badge variant={'secondary'}>TypeScript</Badge>
                            <Badge variant={'secondary'}>Docker</Badge>
                            <Badge variant={'secondary'}>Tailwind</Badge>
                            <Badge variant={'secondary'}>Cypress</Badge>
                            <Badge variant={'secondary'}>Java Spring Boot</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Fortes Tecnologia - Desenvolvedor FullStack | Sistemas
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Set 2022 - Set 2024</p>
                        </div>
                        <div className="mb-2">
                          <strong>Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Desenvolvi e mantive sistemas de gestão organizacional, garantindo eficiência e aderência às melhores práticas de programação e padrões de código limpo.</li>
                            <li>Refatorei código legado para melhorar a performance, reduzir a complexidade e aumentar a manutenibilidade das soluções existentes.</li>
                            <li>Implementei novas funcionalidades e integrei APIs, atendendo às necessidades de negócio e garantindo a qualidade das entregas por meio de revisões e testes contínuos.</li>
                            <li>Corrigi bugs e colaborei com a equipe de desenvolvimento, utilizando ferramentas como Git e GitHub para versionamento e integração eficiente de código.</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>SQL Server</Badge>
                            <Badge variant={'secondary'}>Git & GitHub</Badge>
                            <Badge variant={'secondary'}>Kanban</Badge>
                            <Badge variant={'secondary'}>Scrum</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Fortes Tecnologia - Desenvolvedor FullStack Trainee
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Mar 2021 - Set 2022</p>
                        </div>
                        <div className="mb-2">
                          <strong>Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Atuei como Full Stack Trainee no desenvolvimento e manutenção de sistemas de gestão, implementando novas funcionalidades, integrando APIs e corrigindo bugs.</li>
                          </ul>
                        </div>
                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>SQL Server</Badge>
                            <Badge variant={'secondary'}>GitHub</Badge>
                            <Badge variant={'secondary'}>Kanban</Badge>
                            <Badge variant={'secondary'}>Scrum</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Consultoria Lyceum - Desenvolvedor FullStack | PHP/JavaScript
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Nov 2020 - Mai 2021</p>
                        </div>

                        <div className="mb-2">
                          <strong>Descrição</strong>
                          <p className="mt-1">Desenvolvi um sistema de agendamentos, utilizando tecnologias modernas para garantir funcionalidade, desempenho e segurança.</p>
                          <strong className="block mt-2">Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Criação de uma interface responsiva e user-friendly, proporcionando uma experiência otimizada para os usuários.</li>
                            <li>Gerenciamento do banco de dados, garantindo consistência e desempenho eficiente.</li>
                            <li>Implementação de medidas de segurança da informação para proteger dados sensíveis e garantir a conformidade com as melhores práticas.</li>
                          </ul>
                        </div>

                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>PHP</Badge>
                            <Badge variant={'secondary'}>JavaScript</Badge>
                            <Badge variant={'secondary'}>HTML5</Badge>
                            <Badge variant={'secondary'}>CSS3</Badge>
                            <Badge variant={'secondary'}>MySQL</Badge>
                            <Badge variant={'secondary'}>Wordpress</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Agência Help 360 - Design Digital e Social Media Designer
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Mar 2020 - Abr 2020</p>
                        </div>

                        <div className="mb-2">
                          <strong>Descrição</strong>
                          <p className="mt-1">Atuei como Diretor de Arte, desenvolvendo materiais criativos para fortalecer a comunicação visual de clientes.</p>
                          <strong className="block mt-2">Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Criação de peças visuais para mídias sociais, alinhadas às estratégias de marca e engajamento.</li>
                            <li>Edição e produção de vídeos, contribuindo para a comunicação audiovisual e campanhas publicitárias.</li>
                          </ul>
                        </div>

                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>Adobe Photoshop</Badge>
                            <Badge variant={'secondary'}>Adobe Illustrator</Badge>
                            <Badge variant={'secondary'}>Adobe Premiere</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell>
                      <div className="mb-4">
                        <div className="font-bold my-4">
                          Midia9 Marketing Digital - Desenvolvedor Web Full Stack
                          <p className="ml-5 font-medium text-sm text-muted-foreground float-right">Jul 2019 - Dez 2019</p>
                        </div>

                        <div className="mb-2">
                          <strong>Descrição</strong>
                          <p className="mt-1">Desenvolvi sites e landing pages responsivas que auxiliaram na captação de usuários para os clientes.</p>
                          <strong className="block mt-2">Principais Atividades</strong>
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Implementação de SEO para otimização em mecanismos de busca.</li>
                            <li>Otimizei o trabalho da equipe com a utilização de templates e temas.</li>
                          </ul>
                        </div>

                        <div>
                          <strong>Ferramentas</strong>
                          <div className="flex gap-1 flex-wrap mt-1">
                            <Badge variant={'secondary'}>PHP</Badge>
                            <Badge variant={'secondary'}>HTML</Badge>
                            <Badge variant={'secondary'}>CSS</Badge>
                            <Badge variant={'secondary'}>WordPress</Badge>
                            <Badge variant={'secondary'}>CMS</Badge>
                            <Badge variant={'secondary'}>Search Engine Optimization (SEO)</Badge>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="mb-8 pb-8">
            <AccordionTrigger>Educação</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="flex gap-2 flex-col">
                        <Badge variant={'default'}>UNI7 | Bacharel em Sistemas de Informação | 2026</Badge>
                        <Badge variant={'secondary'}>EEEP | Curso Técnico em Informática | 2019</Badge>
                        <Badge variant={'default'}>Digital College Brasil | Formação avançada em PHP e Laravel | 2024</Badge>
                        <Badge variant={'secondary'}>Ada Tech | Front-end em React | 2025</Badge>
                        <Badge variant={'default'}>Instituto Atlântico | Programa Residência em TIC 20 - Avanti Capacita Brasil / C-Jovem | 2025 </Badge>
                        <Badge variant={'secondary'}>IEL & Digital College Brasil | Geração Tech 2.0 | 2025</Badge>
                      </div>
                    </TableCell>
                  </ TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="mb-8 pb-8">
            <AccordionTrigger>Certificações</AccordionTrigger>
            <AccordionContent>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="mb-5">
                        <strong className="block mb-2">Compass UOL</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>AWS Cloud Data Engineering - Scholarship Program</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">Amazon Web Services (AWS)</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>AWS Certified Cloud Practitioner - CLF-C02</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">Ada Tech</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Back-end - Trilha Digital | Coders 24</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">Udemy</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>Docker para Desenvolvedores (com Docker Swarm e Kubernetes)</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">Alura e Google</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Imersão Inteligência Artificial 2ª Edição</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">AWS Official Content</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>Amazon QuickSight - Iniciando</Badge>
                          <Badge variant={'default'}>AWS Glue - Iniciando</Badge>
                          <Badge variant={'secondary'}>Amazon Athena - Iniciando</Badge>
                          <Badge variant={'default'}>Introdução Completa ao Amazon QuickSight</Badge>
                          <Badge variant={'secondary'}>Noções Básicas de Analytics na AWS - Parte 1</Badge>
                          <Badge variant={'default'}>Fundamentos de Analytics na AWS - Parte 2</Badge>
                          <Badge variant={'secondary'}>Serverless Analytics</Badge>
                          <Badge variant={'default'}>Elementos Técnicos Essenciais da AWS</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">AWS Partner</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>Credenciamento de Vendas</Badge>
                          <Badge variant={'default'}>Economia na Nuvem</Badge>
                          <Badge variant={'secondary'}>Credenciamento Técnico</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">DIO & LocalizaLabs & AWS</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>Introdução à Amazon Web Services (AWS)</Badge>
                          <Badge variant={'default'}>Descubra a Nuvem AWS</Badge>
                          <Badge variant={'secondary'}>Conhecendo os Serviços da AWS</Badge>
                          <Badge variant={'default'}>Fundamentos de Computação em Nuvem na AWS</Badge>
                        </div>
                      </div>
                      <div className="mb-5">
                        <strong className="block mb-2">Gracom Escola de Efeitos Visuais</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>OPEN CG | Design Digital e Multimídia</Badge>
                        </div>
                      </div>
                      <div>
                        <strong className="block mb-2">Casa Amarela Eusélio Oliveira - UFC</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Fotografia de Estúdio e Técnicas de Iluminação</Badge>
                        </div>
                      </div>
                    </TableCell>
                  </ TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="mb-8 pb-8">
            <AccordionTrigger>Atividade Extracurriculares</AccordionTrigger>
            <AccordionContent>
              <Table className="mb-8">
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="mb-5">
                        <strong className="block mb-2">EEEP Professor Joaquim Antônio Albano</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Membro da Comissão de Formatura (2019)</Badge>
                          <Badge variant={'secondary'}>Tesoureiro de Vendas da Turma (2019)</Badge>
                          <Badge variant={'default'}>Monitor de PHP e MySQL (2018)</Badge>
                          <Badge variant={'secondary'}>Curso de Empreendedorismo do SEBRAE (2017)</Badge>
                        </div>
                      </div>

                      <div>
                        <strong className="block mb-2">UFC - Universidade Federal do Ceará</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Participante de Oficinas Práticas de Python, Git e GitHub (2018)</Badge>
                        </div>
                      </div>
                    </TableCell>
                  </ TableRow>
                </TableBody>
              </Table>

              <Table className="mb-8">
                <TableHeader className="font-medium align-top">
                  <div className="flex justify-between mb-4">
                    Participante e Voluntário em Comunidades Tech
                  </div>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div>
                        <div className="flex gap-2 flex-wrap mb-4">
                          <Badge variant={'default'}>Front-End CE</Badge>
                          <Badge variant={'default'}>HouseJS</Badge>
                          <Badge variant={'default'}>PHP com Rapadura</Badge>
                          <Badge variant={'default'}>PUG CE (Python)</Badge>
                        </div>
                        <div className="flex text-wrap gap-2">
                          <Badge variant={'secondary'}>Liderança em Projeto: Prototipagem de Site para ONG (Instituto Recomeçando)</Badge>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table className="mb-8">
                <TableHeader className="font-medium align-top">
                  <div className="flex justify-between mb-4">
                    Eventos e Comunidades
                    <p className="text-muted-foreground">(Participações em Fortaleza, CE)</p>
                  </div>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="mb-5">
                        <strong className="block mb-2">NINNA Hub</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Google Developers Groups Fortaleza: Google I/O Extended 2024</Badge>
                          <Badge variant={'secondary'}>ElaTech: Descubra seu lugar</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">Digital College Brasil</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>GitTogether Outubro 2024</Badge>
                          <Badge variant={'secondary'}>React Ceará: 9º Meetup Presencial</Badge>
                          <Badge variant={'default'}>Front-end CE: Papo Dev - Empregos em Tecnologia</Badge>
                          <Badge variant={'secondary'}>Front-end CE: Festa Melhores do Ano + Codando no Breu 2024</Badge>
                          <Badge variant={'default'}>Desbravando a Nova Era do Big Data e Inteligência Artificial | Grupo Portfólio, Rapadura Tech, Lanlink, Iracema Digital, Rapadura Valley</Badge>
                          <Badge variant={'secondary'}>RH Otimizado: 7º Encontro Presencial</Badge>
                          <Badge variant={'default'}>House JS: Meetup da comunidade</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">Unichristus - Campus Dom Luís</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Front-end CE: Recapitulação Front End Day 2024</Badge>
                          <Badge variant={'secondary'}>Front-end CE: 15º Meetup Presencial</Badge>
                          <Badge variant={'default'}>Front-end CE, PHP Com Rapadura e React Ceará: 2º Encontro Entre Comunidades</Badge>
                          <Badge variant={'secondary'}>PHP com Rapadura: Encontro de DEVS PHP com Rapadura</Badge>
                          <Badge variant={'default'}>Pylestras - Edição XXI</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">Fábrica de Negócios</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>Front-end CE: Front End Day 2024 - Ampliando Conexões</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">UniCesumar</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Java Ceará: 2º Meetup Presencial Javax</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">FB Uni</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>JavaScript Ceará e PUG-CE: 1º Meetup PYJS</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">IFCE</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>CocoaHeads</Badge>
                        </div>
                      </div>

                      <div>
                        <strong className="block mb-2">Estácio</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>LINUXtips.local</Badge>
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>

              <Table>
                <TableHeader className="font-medium align-top">
                  <div className="flex justify-between mb-4">
                    Oficinas Práticas
                    <p className="text-muted-foreground">(Participações em Fortaleza, CE)</p>
                  </div>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <div className="mb-5">
                        <strong className="block mb-2">Imersão Digital | Digital College Brasil</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Criando uma API RESTFul em Instante | Alessandro Feitoza</Badge>
                          <Badge variant={'secondary'}>Criação de uma página com NextJS e Tailwind | Rodrigo Medeiros</Badge>
                          <Badge variant={'default'}>Primeiros passos com Python para Inteligência Artificial</Badge>
                          <Badge variant={'secondary'}>Como fazer um site em 4 horas utilizando Vue.js</Badge>
                          <Badge variant={'default'}>Torne-se um mestre da Análise de Dados e transforme sua vida</Badge>
                          <Badge variant={'secondary'}>Como construir a identidade visual de uma marca online | Marketing Digital</Badge>
                          <Badge variant={'default'}>Criação de Portfólio | João Pedro</Badge>
                        </div>
                      </div>

                      <div className="mb-5">
                        <strong className="block mb-2">NINNA Hub</strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'secondary'}>O Impacto da Oratória e Comunicação na Vida Pessoal e Profissional Com Especialista William Magalhães - Vox2you & Agilizem</Badge>
                        </div>
                      </div>

                      <div>
                        <strong className="block mb-2">Casa Amarela Eusélio Oliveira - UFC </strong>
                        <div className="flex gap-2 flex-col">
                          <Badge variant={'default'}>Fotografia no Passeio Público Com Fotógrafo Thiago Braga</Badge>
                          <Badge variant={'secondary'}>Direitos de Imagem na Fotografia de Rua Com Advogado e Fotógrafo Eric Mota</Badge>
                        </div>
                      </div>
                    </TableCell>
                  </ TableRow>
                </TableBody>
              </Table>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>Portfólio</AccordionTrigger>
            <AccordionContent>
              <Badge variant={'outline'}><FaGithub /><a href="https://github.com/mathewvieira">Projetos GitHub</a></Badge>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mb-10 flex justify-center">
        <a href="#curriculo"><Button variant='default'>Voltar ao topo</Button></a>
      </div>
    </ThemeProvider>
  );
}
