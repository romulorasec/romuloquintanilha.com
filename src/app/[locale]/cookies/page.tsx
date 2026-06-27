import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: "Cookie Policy — Rômulo Quintanilha",
    description: "Information about how romuloquintanilha.com uses cookies and similar tracking technologies.",
  },
  "pt-BR": {
    title: "Política de Cookies — Rômulo Quintanilha",
    description: "Informações sobre como romuloquintanilha.com usa cookies e tecnologias de rastreamento similares.",
  },
  "pt-PT": {
    title: "Política de Cookies — Rômulo Quintanilha",
    description: "Informações sobre como romuloquintanilha.com utiliza cookies e tecnologias de rastreamento similares.",
  },
  es: {
    title: "Política de Cookies — Rômulo Quintanilha",
    description: "Información sobre cómo romuloquintanilha.com usa cookies y tecnologías de seguimiento similares.",
  },
}

const LAST_UPDATED: Record<string, string> = {
  en: "June 27, 2026",
  "pt-BR": "27 de junho de 2026",
  "pt-PT": "27 de junho de 2026",
  es: "27 de junio de 2026",
}

const TITLE: Record<string, string> = {
  en: "Cookie Policy",
  "pt-BR": "Política de Cookies",
  "pt-PT": "Política de Cookies",
  es: "Política de Cookies",
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return META[locale] ?? META.en
}

function CookiesEN() {
  return (
    <>
      <h2>What Are Cookies</h2>
      <p>
        Cookies are small text files stored on your device when you visit a website. They allow the site to remember preferences, analyze usage patterns, and improve your experience. This policy explains what cookies this site uses and why.
      </p>
      <h2>How This Site Uses Cookies</h2>
      <p>
        This website uses a minimal set of cookies. I do not use advertising cookies or sell data to third parties. The cookies on this site fall into two categories:
      </p>
      <h2>Essential Cookies</h2>
      <p>These cookies are necessary for the website to function correctly and cannot be disabled. They include:</p>
      <ul>
        <li><strong>Security tokens</strong> — used by Cloudflare Turnstile to prevent spam submissions on the contact form. These are session-only and expire when you close your browser.</li>
        <li><strong>Hosting infrastructure</strong> — Vercel may set functional cookies for routing and load balancing. No personally identifiable information is stored.</li>
      </ul>
      <h2>Analytics Cookies</h2>
      <p>
        I use anonymized analytics to understand how visitors use this site, which pages are most visited, and how to improve the experience. Analytics data is aggregated and does not identify individual users. No cross-site tracking is performed.
      </p>
      <h2>Third-Party Cookies</h2>
      <p>The following third-party services may set cookies on your device:</p>
      <ul>
        <li>
          <strong>Cloudflare Turnstile</strong> — sets a temporary cookie to verify you are a human when submitting the contact form. See <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Cloudflare&apos;s Privacy Policy</a>.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — collects anonymized, aggregated page view data. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Vercel&apos;s Privacy Policy</a>.
        </li>
      </ul>
      <h2>Managing Cookies</h2>
      <p>
        You can control and delete cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing ones. Note that disabling essential cookies may affect the functionality of the contact form.
      </p>
      <p>Instructions for common browsers:</p>
      <ul>
        <li><strong>Chrome</strong> — Settings → Privacy and security → Cookies and other site data</li>
        <li><strong>Safari</strong> — Preferences → Privacy → Manage Website Data</li>
        <li><strong>Firefox</strong> — Settings → Privacy &amp; Security → Cookies and Site Data</li>
      </ul>
      <h2>Your Rights</h2>
      <p>
        If you are in the European Economic Area, you have rights under GDPR regarding your personal data. If you are in California, CCPA applies. Since this site uses only minimal, functional cookies and no advertising cookies, your privacy exposure is limited. For any data-related requests, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Changes to This Policy</h2>
      <p>
        I may update this Cookie Policy if the technologies or services used on this site change. Updates will be reflected with a revised &quot;Last updated&quot; date at the top of this page.
      </p>
      <h2>Contact</h2>
      <p>For questions about this Cookie Policy, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function CookiesPTBR() {
  return (
    <>
      <h2>O que São Cookies</h2>
      <p>
        Cookies são pequenos arquivos de texto armazenados no seu dispositivo quando você visita um site. Eles permitem que o site lembre preferências, analise padrões de uso e melhore a sua experiência. Esta política explica quais cookies este site usa e por quê.
      </p>
      <h2>Como Este Site Usa Cookies</h2>
      <p>
        Este site usa um conjunto mínimo de cookies. Não utilizo cookies de publicidade nem vendo dados a terceiros. Os cookies neste site se enquadram em duas categorias:
      </p>
      <h2>Cookies Essenciais</h2>
      <p>Esses cookies são necessários para o funcionamento correto do site e não podem ser desativados. Eles incluem:</p>
      <ul>
        <li><strong>Tokens de segurança</strong> — usados pelo Cloudflare Turnstile para evitar envios de spam no formulário de contato. São apenas de sessão e expiram quando você fecha o navegador.</li>
        <li><strong>Infraestrutura de hospedagem</strong> — o Vercel pode definir cookies funcionais para roteamento e balanceamento de carga. Nenhuma informação pessoal identificável é armazenada.</li>
      </ul>
      <h2>Cookies de Análise</h2>
      <p>
        Utilizo análises anonimizadas para entender como os visitantes usam este site, quais páginas são mais acessadas e como melhorar a experiência. Os dados de análise são agregados e não identificam usuários individualmente. Não é realizado rastreamento entre sites.
      </p>
      <h2>Cookies de Terceiros</h2>
      <p>Os seguintes serviços de terceiros podem definir cookies no seu dispositivo:</p>
      <ul>
        <li>
          <strong>Cloudflare Turnstile</strong> — define um cookie temporário para verificar que você é humano ao enviar o formulário de contato. Veja a <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Política de Privacidade da Cloudflare</a>.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — coleta dados de visualização de página anonimizados e agregados. Veja a <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade da Vercel</a>.
        </li>
      </ul>
      <h2>Gerenciamento de Cookies</h2>
      <p>
        Você pode controlar e excluir cookies pelas configurações do seu navegador. A maioria dos navegadores permite recusar cookies ou excluir os existentes. Observe que desativar cookies essenciais pode afetar o funcionamento do formulário de contato.
      </p>
      <p>Instruções para navegadores comuns:</p>
      <ul>
        <li><strong>Chrome</strong> — Configurações → Privacidade e segurança → Cookies e outros dados do site</li>
        <li><strong>Safari</strong> — Preferências → Privacidade → Gerenciar dados do site</li>
        <li><strong>Firefox</strong> — Configurações → Privacidade e Segurança → Cookies e dados do site</li>
      </ul>
      <h2>Seus Direitos</h2>
      <p>
        Se você estiver no Espaço Econômico Europeu, possui direitos sob o GDPR sobre seus dados pessoais. Se estiver na Califórnia, aplica-se o CCPA. Como este site usa apenas cookies mínimos e funcionais, sem cookies de publicidade, sua exposição à privacidade é limitada. Para qualquer solicitação relacionada a dados, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Alterações nesta Política</h2>
      <p>
        Esta Política de Cookies pode ser atualizada se as tecnologias ou serviços usados neste site mudarem. As atualizações serão refletidas com uma data de &quot;Última atualização&quot; revisada no topo desta página.
      </p>
      <h2>Contato</h2>
      <p>Para dúvidas sobre esta Política de Cookies, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function CookiesPTPT() {
  return (
    <>
      <h2>O que São Cookies</h2>
      <p>
        Os cookies são pequenos ficheiros de texto armazenados no seu dispositivo quando visita um website. Permitem que o site recorde preferências, analise padrões de utilização e melhore a sua experiência. Esta política explica que cookies este site utiliza e porquê.
      </p>
      <h2>Como Este Site Utiliza Cookies</h2>
      <p>
        Este website utiliza um conjunto mínimo de cookies. Não utilizo cookies de publicidade nem vendo dados a terceiros. Os cookies neste site enquadram-se em duas categorias:
      </p>
      <h2>Cookies Essenciais</h2>
      <p>Estes cookies são necessários para o funcionamento correto do website e não podem ser desativados. Incluem:</p>
      <ul>
        <li><strong>Tokens de segurança</strong> — utilizados pelo Cloudflare Turnstile para evitar envios de spam no formulário de contacto. São apenas de sessão e expiram quando fecha o browser.</li>
        <li><strong>Infraestrutura de alojamento</strong> — o Vercel pode definir cookies funcionais para encaminhamento e balanceamento de carga. Não é armazenada qualquer informação pessoal identificável.</li>
      </ul>
      <h2>Cookies de Análise</h2>
      <p>
        Utilizo análises anonimizadas para compreender como os visitantes utilizam este site, quais as páginas mais visitadas e como melhorar a experiência. Os dados de análise são agregados e não identificam utilizadores individualmente. Não é realizado rastreamento entre sites.
      </p>
      <h2>Cookies de Terceiros</h2>
      <p>Os seguintes serviços de terceiros podem definir cookies no seu dispositivo:</p>
      <ul>
        <li>
          <strong>Cloudflare Turnstile</strong> — define um cookie temporário para verificar que é humano ao submeter o formulário de contacto. Consulte a <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Política de Privacidade da Cloudflare</a>.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — recolhe dados de visualização de página anonimizados e agregados. Consulte a <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidade da Vercel</a>.
        </li>
      </ul>
      <h2>Gestão de Cookies</h2>
      <p>
        Pode controlar e eliminar cookies através das definições do seu browser. A maioria dos browsers permite recusar cookies ou eliminar os existentes. Note que desativar cookies essenciais pode afetar o funcionamento do formulário de contacto.
      </p>
      <p>Instruções para browsers comuns:</p>
      <ul>
        <li><strong>Chrome</strong> — Definições → Privacidade e segurança → Cookies e outros dados do site</li>
        <li><strong>Safari</strong> — Preferências → Privacidade → Gerir dados do site</li>
        <li><strong>Firefox</strong> — Definições → Privacidade e Segurança → Cookies e dados do site</li>
      </ul>
      <h2>Os Seus Direitos</h2>
      <p>
        Se se encontrar no Espaço Económico Europeu, possui direitos ao abrigo do GDPR relativamente aos seus dados pessoais. Se se encontrar na Califórnia, aplica-se o CCPA. Como este site utiliza apenas cookies mínimos e funcionais, sem cookies de publicidade, a sua exposição à privacidade é limitada. Para qualquer pedido relacionado com dados, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Alterações a Esta Política</h2>
      <p>
        Esta Política de Cookies pode ser atualizada se as tecnologias ou serviços utilizados neste site mudarem. As atualizações serão refletidas com uma data de &quot;Última atualização&quot; revista no topo desta página.
      </p>
      <h2>Contacto</h2>
      <p>Para questões sobre esta Política de Cookies, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function CookiesES() {
  return (
    <>
      <h2>¿Qué Son las Cookies?</h2>
      <p>
        Las cookies son pequeños archivos de texto almacenados en tu dispositivo cuando visitas un sitio web. Permiten que el sitio recuerde preferencias, analice patrones de uso y mejore tu experiencia. Esta política explica qué cookies usa este sitio y por qué.
      </p>
      <h2>Cómo Usa Este Sitio las Cookies</h2>
      <p>
        Este sitio web usa un conjunto mínimo de cookies. No uso cookies de publicidad ni vendo datos a terceros. Las cookies de este sitio se dividen en dos categorías:
      </p>
      <h2>Cookies Esenciales</h2>
      <p>Estas cookies son necesarias para el correcto funcionamiento del sitio web y no se pueden deshabilitar. Incluyen:</p>
      <ul>
        <li><strong>Tokens de seguridad</strong> — usados por Cloudflare Turnstile para evitar envíos de spam en el formulario de contacto. Son solo de sesión y expiran cuando cierras el navegador.</li>
        <li><strong>Infraestructura de alojamiento</strong> — Vercel puede establecer cookies funcionales para enrutamiento y equilibrio de carga. No se almacena información de identificación personal.</li>
      </ul>
      <h2>Cookies de Análisis</h2>
      <p>
        Utilizo análisis anonimizados para entender cómo los visitantes usan este sitio, qué páginas son las más visitadas y cómo mejorar la experiencia. Los datos de análisis son agregados y no identifican a usuarios individuales. No se realiza seguimiento entre sitios.
      </p>
      <h2>Cookies de Terceros</h2>
      <p>Los siguientes servicios de terceros pueden establecer cookies en tu dispositivo:</p>
      <ul>
        <li>
          <strong>Cloudflare Turnstile</strong> — establece una cookie temporal para verificar que eres humano al enviar el formulario de contacto. Consulta la <a href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">Política de Privacidad de Cloudflare</a>.
        </li>
        <li>
          <strong>Vercel Analytics</strong> — recopila datos de visitas de página anonimizados y agregados. Consulta la <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer">Política de Privacidad de Vercel</a>.
        </li>
      </ul>
      <h2>Gestión de Cookies</h2>
      <p>
        Puedes controlar y eliminar cookies a través de la configuración de tu navegador. La mayoría de los navegadores te permiten rechazar cookies o eliminar las existentes. Ten en cuenta que deshabilitar las cookies esenciales puede afectar la funcionalidad del formulario de contacto.
      </p>
      <p>Instrucciones para navegadores comunes:</p>
      <ul>
        <li><strong>Chrome</strong> — Configuración → Privacidad y seguridad → Cookies y otros datos de sitios</li>
        <li><strong>Safari</strong> — Preferencias → Privacidad → Administrar datos de sitios web</li>
        <li><strong>Firefox</strong> — Configuración → Privacidad y Seguridad → Cookies y datos del sitio</li>
      </ul>
      <h2>Tus Derechos</h2>
      <p>
        Si te encuentras en el Espacio Económico Europeo, tienes derechos bajo el GDPR sobre tus datos personales. Si estás en California, se aplica el CCPA. Como este sitio solo usa cookies mínimas y funcionales, sin cookies de publicidad, tu exposición a la privacidad es limitada. Para cualquier solicitud relacionada con datos, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.
      </p>
      <h2>Cambios a Esta Política</h2>
      <p>
        Puedo actualizar esta Política de Cookies si las tecnologías o servicios usados en este sitio cambian. Las actualizaciones se reflejarán con una fecha de &quot;Última actualización&quot; revisada en la parte superior de esta página.
      </p>
      <h2>Contacto</h2>
      <p>Para preguntas sobre esta Política de Cookies, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <LegalLayout title={TITLE[locale] ?? TITLE.en} lastUpdated={LAST_UPDATED[locale] ?? LAST_UPDATED.en}>
      {locale === "pt-BR" && <CookiesPTBR />}
      {locale === "pt-PT" && <CookiesPTPT />}
      {locale === "es" && <CookiesES />}
      {(locale === "en" || !["pt-BR", "pt-PT", "es"].includes(locale)) && <CookiesEN />}
    </LegalLayout>
  )
}
