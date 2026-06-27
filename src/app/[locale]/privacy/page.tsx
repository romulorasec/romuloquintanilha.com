import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: "Privacy Policy — Rômulo Quintanilha",
    description: "How Rômulo Quintanilha collects, uses, and protects your personal information.",
  },
  "pt-BR": {
    title: "Política de Privacidade — Rômulo Quintanilha",
    description: "Como Rômulo Quintanilha coleta, usa e protege suas informações pessoais.",
  },
  "pt-PT": {
    title: "Política de Privacidade — Rômulo Quintanilha",
    description: "Como Rômulo Quintanilha recolhe, utiliza e protege as suas informações pessoais.",
  },
  es: {
    title: "Política de Privacidad — Rômulo Quintanilha",
    description: "Cómo Rômulo Quintanilha recopila, usa y protege tu información personal.",
  },
}

const LAST_UPDATED: Record<string, string> = {
  en: "June 27, 2026",
  "pt-BR": "27 de junho de 2026",
  "pt-PT": "27 de junho de 2026",
  es: "27 de junio de 2026",
}

const TITLE: Record<string, string> = {
  en: "Privacy Policy",
  "pt-BR": "Política de Privacidade",
  "pt-PT": "Política de Privacidade",
  es: "Política de Privacidad",
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return META[locale] ?? META.en
}

function PrivacyEN() {
  return (
    <>
      <h2>Overview</h2>
      <p>
        Rômulo Quintanilha (&quot;I,&quot; &quot;me,&quot; or &quot;my&quot;) operates this website as a freelance web designer based in Menlo Park, California. This Privacy Policy explains how I collect, use, disclose, and safeguard information when you visit romuloquintanilha.com or contact me about my services.
      </p>
      <p>
        By using this site, you agree to the practices described in this policy. If you have questions, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Information I Collect</h2>
      <p>I may collect the following types of information:</p>
      <ul>
        <li><strong>Contact information</strong> — name, email address, phone number, and company name submitted through the contact form.</li>
        <li><strong>Project details</strong> — information you voluntarily share about your project needs, goals, and budget.</li>
        <li><strong>Usage data</strong> — anonymized analytics such as pages visited, time on site, and browser type, collected via analytics tools.</li>
        <li><strong>Device data</strong> — IP address, browser type, operating system, and referring URLs for security and analytics purposes.</li>
      </ul>
      <h2>How I Use Your Information</h2>
      <p>The information I collect is used solely to:</p>
      <ul>
        <li>Respond to your inquiries and provide project quotes.</li>
        <li>Communicate about ongoing or potential projects.</li>
        <li>Improve this website&apos;s performance and user experience.</li>
        <li>Comply with applicable legal obligations.</li>
      </ul>
      <p>I do not sell, rent, or share your personal information with third parties for marketing purposes.</p>
      <h2>Data Storage and Security</h2>
      <p>
        Contact form submissions are processed via Resend, an email delivery service. Messages are transmitted securely and stored only as long as necessary to respond to your inquiry. I use industry-standard security measures to protect your data, but no method of transmission over the internet is 100% secure.
      </p>
      <h2>California Privacy Rights (CCPA)</h2>
      <p>
        If you are a California resident, you have the right to request disclosure of the personal information I have collected about you, request deletion of that information, and opt out of the sale of personal information. I do not sell personal information. To exercise your rights, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Third-Party Services</h2>
      <p>This site may use the following third-party services, each subject to their own privacy policies:</p>
      <ul>
        <li><strong>Resend</strong> — email delivery for contact form submissions.</li>
        <li><strong>Cloudflare Turnstile</strong> — bot protection on the contact form.</li>
        <li><strong>Vercel</strong> — website hosting and analytics.</li>
      </ul>
      <h2>Cookies</h2>
      <p>This site uses minimal cookies for functionality and anonymized analytics. See my <a href="cookies">Cookie Policy</a> for details.</p>
      <h2>Children&apos;s Privacy</h2>
      <p>
        This website is not directed at children under 13. I do not knowingly collect personal information from children. If you believe a child has submitted information, please contact me to have it removed.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        I may update this Privacy Policy periodically. Changes will be posted on this page with a revised &quot;Last updated&quot; date. Continued use of this site after changes constitutes acceptance of the updated policy.
      </p>
      <h2>Contact</h2>
      <p>For privacy-related questions or requests, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function PrivacyPTBR() {
  return (
    <>
      <h2>Visão Geral</h2>
      <p>
        Rômulo Quintanilha (&quot;eu&quot; ou &quot;meu&quot;) opera este site como web designer freelance baseado em Menlo Park, Califórnia. Esta Política de Privacidade explica como coleto, uso, divulgo e protejo informações quando você visita romuloquintanilha.com ou entra em contato sobre meus serviços.
      </p>
      <p>
        Ao usar este site, você concorda com as práticas descritas nesta política. Se tiver dúvidas, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Informações que Coleto</h2>
      <p>Posso coletar os seguintes tipos de informação:</p>
      <ul>
        <li><strong>Dados de contato</strong> — nome, e-mail, telefone e nome da empresa enviados pelo formulário de contato.</li>
        <li><strong>Detalhes do projeto</strong> — informações que você compartilha voluntariamente sobre suas necessidades, objetivos e orçamento.</li>
        <li><strong>Dados de uso</strong> — estatísticas anonimizadas como páginas visitadas, tempo no site e tipo de navegador, coletadas via ferramentas de análise.</li>
        <li><strong>Dados do dispositivo</strong> — endereço IP, tipo de navegador, sistema operacional e URLs de origem para fins de segurança e análise.</li>
      </ul>
      <h2>Como Uso Suas Informações</h2>
      <p>As informações coletadas são usadas exclusivamente para:</p>
      <ul>
        <li>Responder às suas dúvidas e fornecer orçamentos de projetos.</li>
        <li>Comunicar sobre projetos em andamento ou potenciais.</li>
        <li>Melhorar o desempenho e a experiência de uso deste site.</li>
        <li>Cumprir obrigações legais aplicáveis.</li>
      </ul>
      <p>Não vendo, alugo ou compartilho suas informações pessoais com terceiros para fins de marketing.</p>
      <h2>Armazenamento e Segurança</h2>
      <p>
        Os envios do formulário de contato são processados pelo Resend, um serviço de entrega de e-mails. As mensagens são transmitidas com segurança e armazenadas apenas pelo tempo necessário para responder à sua solicitação. Utilizo medidas de segurança padrão do setor para proteger seus dados, mas nenhum método de transmissão pela internet é 100% seguro.
      </p>
      <h2>Direitos de Privacidade da Califórnia (CCPA)</h2>
      <p>
        Se você reside na Califórnia, tem o direito de solicitar a divulgação das informações pessoais que coletei sobre você, solicitar a exclusão dessas informações e optar por não participar da venda de informações pessoais. Não vendo informações pessoais. Para exercer seus direitos, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Serviços de Terceiros</h2>
      <p>Este site pode utilizar os seguintes serviços de terceiros, cada um sujeito às suas próprias políticas de privacidade:</p>
      <ul>
        <li><strong>Resend</strong> — entrega de e-mails para envios do formulário de contato.</li>
        <li><strong>Cloudflare Turnstile</strong> — proteção contra bots no formulário de contato.</li>
        <li><strong>Vercel</strong> — hospedagem e análise do site.</li>
      </ul>
      <h2>Cookies</h2>
      <p>Este site usa cookies mínimos para funcionalidade e análise anonimizada. Veja minha <a href="cookies">Política de Cookies</a> para mais detalhes.</p>
      <h2>Privacidade de Menores</h2>
      <p>
        Este site não é direcionado a menores de 13 anos. Não coletamos conscientemente informações pessoais de crianças. Se você acredita que uma criança enviou informações, entre em contato para que sejam removidas.
      </p>
      <h2>Alterações nesta Política</h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão publicadas nesta página com uma data de &quot;Última atualização&quot; revisada. O uso continuado do site após as alterações constitui aceitação da política atualizada.
      </p>
      <h2>Contato</h2>
      <p>Para dúvidas ou solicitações relacionadas à privacidade, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function PrivacyPTPT() {
  return (
    <>
      <h2>Visão Geral</h2>
      <p>
        Rômulo Quintanilha (&quot;eu&quot; ou &quot;meu&quot;) opera este website como web designer freelance baseado em Menlo Park, Califórnia. Esta Política de Privacidade explica como recolho, utilizo, divulgo e protejo informações quando o utilizador visita romuloquintanilha.com ou entra em contacto sobre os meus serviços.
      </p>
      <p>
        Ao utilizar este site, o utilizador concorda com as práticas descritas nesta política. Em caso de dúvidas, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Informações que Recolho</h2>
      <p>Posso recolher os seguintes tipos de informação:</p>
      <ul>
        <li><strong>Dados de contacto</strong> — nome, endereço de e-mail, número de telefone e nome da empresa submetidos através do formulário de contacto.</li>
        <li><strong>Detalhes do projeto</strong> — informações que o utilizador partilha voluntariamente sobre as suas necessidades, objetivos e orçamento.</li>
        <li><strong>Dados de utilização</strong> — estatísticas anonimizadas como páginas visitadas, tempo no site e tipo de browser, recolhidas através de ferramentas de análise.</li>
        <li><strong>Dados do dispositivo</strong> — endereço IP, tipo de browser, sistema operativo e URLs de referência para fins de segurança e análise.</li>
      </ul>
      <h2>Como Utilizo as Suas Informações</h2>
      <p>As informações recolhidas são utilizadas exclusivamente para:</p>
      <ul>
        <li>Responder às suas questões e fornecer orçamentos de projetos.</li>
        <li>Comunicar sobre projetos em curso ou potenciais.</li>
        <li>Melhorar o desempenho e a experiência de utilização deste website.</li>
        <li>Cumprir obrigações legais aplicáveis.</li>
      </ul>
      <p>Não vendo, arrendo nem partilho as suas informações pessoais com terceiros para fins de marketing.</p>
      <h2>Armazenamento e Segurança</h2>
      <p>
        Os envios do formulário de contacto são processados pelo Resend, um serviço de entrega de e-mails. As mensagens são transmitidas de forma segura e armazenadas apenas pelo tempo necessário para responder ao seu pedido. Utilizo medidas de segurança padrão da indústria para proteger os seus dados, mas nenhum método de transmissão pela internet é 100% seguro.
      </p>
      <h2>Direitos de Privacidade da Califórnia (CCPA)</h2>
      <p>
        Se for residente na Califórnia, tem o direito de solicitar a divulgação das informações pessoais que recolhi sobre si, solicitar a eliminação dessas informações e optar por não participar na venda de informações pessoais. Não vendo informações pessoais. Para exercer os seus direitos, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Serviços de Terceiros</h2>
      <p>Este site pode utilizar os seguintes serviços de terceiros, cada um sujeito às suas próprias políticas de privacidade:</p>
      <ul>
        <li><strong>Resend</strong> — entrega de e-mails para envios do formulário de contacto.</li>
        <li><strong>Cloudflare Turnstile</strong> — proteção contra bots no formulário de contacto.</li>
        <li><strong>Vercel</strong> — alojamento e análise do website.</li>
      </ul>
      <h2>Cookies</h2>
      <p>Este site utiliza cookies mínimos para funcionalidade e análise anonimizada. Consulte a minha <a href="cookies">Política de Cookies</a> para mais detalhes.</p>
      <h2>Privacidade de Menores</h2>
      <p>
        Este website não é direcionado a menores de 13 anos. Não recolho conscientemente informações pessoais de crianças. Se acreditar que uma criança submeteu informações, contacte-me para que sejam removidas.
      </p>
      <h2>Alterações a Esta Política</h2>
      <p>
        Esta Política de Privacidade pode ser atualizada periodicamente. As alterações serão publicadas nesta página com uma data de &quot;Última atualização&quot; revista. A utilização continuada do site após as alterações constitui aceitação da política atualizada.
      </p>
      <h2>Contacto</h2>
      <p>Para questões ou pedidos relacionados com privacidade, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function PrivacyES() {
  return (
    <>
      <h2>Descripción General</h2>
      <p>
        Rômulo Quintanilha (&quot;yo&quot; o &quot;mi&quot;) opera este sitio web como diseñador web freelance con sede en Menlo Park, California. Esta Política de Privacidad explica cómo recopilo, uso, divulgo y protejo la información cuando visitas romuloquintanilha.com o me contactas sobre mis servicios.
      </p>
      <p>
        Al usar este sitio, aceptas las prácticas descritas en esta política. Si tienes preguntas, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Información que Recopilo</h2>
      <p>Puedo recopilar los siguientes tipos de información:</p>
      <ul>
        <li><strong>Información de contacto</strong> — nombre, correo electrónico, número de teléfono y nombre de empresa enviados a través del formulario de contacto.</li>
        <li><strong>Detalles del proyecto</strong> — información que compartes voluntariamente sobre tus necesidades, objetivos y presupuesto.</li>
        <li><strong>Datos de uso</strong> — estadísticas anonimizadas como páginas visitadas, tiempo en el sitio y tipo de navegador, recopiladas mediante herramientas de análisis.</li>
        <li><strong>Datos del dispositivo</strong> — dirección IP, tipo de navegador, sistema operativo y URLs de referencia para fines de seguridad y análisis.</li>
      </ul>
      <h2>Cómo Uso tu Información</h2>
      <p>La información que recopilo se usa exclusivamente para:</p>
      <ul>
        <li>Responder a tus consultas y proporcionar presupuestos de proyectos.</li>
        <li>Comunicarme sobre proyectos en curso o potenciales.</li>
        <li>Mejorar el rendimiento y la experiencia de usuario de este sitio.</li>
        <li>Cumplir con las obligaciones legales aplicables.</li>
      </ul>
      <p>No vendo, alquilo ni comparto tu información personal con terceros para fines de marketing.</p>
      <h2>Almacenamiento y Seguridad</h2>
      <p>
        Los envíos del formulario de contacto se procesan a través de Resend, un servicio de entrega de correos. Los mensajes se transmiten de forma segura y se almacenan solo el tiempo necesario para responder a tu consulta. Utilizo medidas de seguridad estándar del sector para proteger tus datos, pero ningún método de transmisión por internet es 100% seguro.
      </p>
      <h2>Derechos de Privacidad de California (CCPA)</h2>
      <p>
        Si eres residente de California, tienes derecho a solicitar la divulgación de la información personal que he recopilado sobre ti, solicitar la eliminación de esa información y optar por no participar en la venta de información personal. No vendo información personal. Para ejercer tus derechos, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Servicios de Terceros</h2>
      <p>Este sitio puede utilizar los siguientes servicios de terceros, cada uno sujeto a sus propias políticas de privacidad:</p>
      <ul>
        <li><strong>Resend</strong> — entrega de correos para envíos del formulario de contacto.</li>
        <li><strong>Cloudflare Turnstile</strong> — protección contra bots en el formulario de contacto.</li>
        <li><strong>Vercel</strong> — alojamiento web y análisis del sitio.</li>
      </ul>
      <h2>Cookies</h2>
      <p>Este sitio usa cookies mínimas para funcionalidad y análisis anonimizado. Consulta mi <a href="cookies">Política de Cookies</a> para más detalles.</p>
      <h2>Privacidad de Menores</h2>
      <p>
        Este sitio web no está dirigido a menores de 13 años. No recopilo conscientemente información personal de niños. Si crees que un menor ha enviado información, contáctame para eliminarla.
      </p>
      <h2>Cambios a Esta Política</h2>
      <p>
        Puedo actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página con una fecha de &quot;Última actualización&quot; revisada. El uso continuado del sitio tras los cambios constituye la aceptación de la política actualizada.
      </p>
      <h2>Contacto</h2>
      <p>Para preguntas o solicitudes relacionadas con la privacidad, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <LegalLayout title={TITLE[locale] ?? TITLE.en} lastUpdated={LAST_UPDATED[locale] ?? LAST_UPDATED.en}>
      {locale === "pt-BR" && <PrivacyPTBR />}
      {locale === "pt-PT" && <PrivacyPTPT />}
      {locale === "es" && <PrivacyES />}
      {(locale === "en" || !["pt-BR", "pt-PT", "es"].includes(locale)) && <PrivacyEN />}
    </LegalLayout>
  )
}
