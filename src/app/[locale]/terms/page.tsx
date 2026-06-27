import type { Metadata } from "next"
import { LegalLayout } from "@/components/shared/legal-layout"

const META: Record<string, { title: string; description: string }> = {
  en: {
    title: "Terms of Service — Rômulo Quintanilha",
    description: "Terms governing the use of romuloquintanilha.com and engagement with Rômulo Quintanilha's freelance design services.",
  },
  "pt-BR": {
    title: "Termos de Serviço — Rômulo Quintanilha",
    description: "Termos que regem o uso de romuloquintanilha.com e a contratação dos serviços de design freelance de Rômulo Quintanilha.",
  },
  "pt-PT": {
    title: "Termos de Serviço — Rômulo Quintanilha",
    description: "Termos que regem a utilização de romuloquintanilha.com e a contratação dos serviços de design freelance de Rômulo Quintanilha.",
  },
  es: {
    title: "Términos de Servicio — Rômulo Quintanilha",
    description: "Términos que rigen el uso de romuloquintanilha.com y la contratación de los servicios de diseño freelance de Rômulo Quintanilha.",
  },
}

const LAST_UPDATED: Record<string, string> = {
  en: "June 27, 2026",
  "pt-BR": "27 de junho de 2026",
  "pt-PT": "27 de junho de 2026",
  es: "27 de junio de 2026",
}

const TITLE: Record<string, string> = {
  en: "Terms of Service",
  "pt-BR": "Termos de Serviço",
  "pt-PT": "Termos de Serviço",
  es: "Términos de Servicio",
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return META[locale] ?? META.en
}

function TermsEN() {
  return (
    <>
      <h2>Agreement to Terms</h2>
      <p>
        By accessing romuloquintanilha.com or engaging my freelance design services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this website or my services.
      </p>
      <h2>Services</h2>
      <p>
        I offer freelance web design, brand identity, UX/UI design, and digital strategy services to local businesses and entrepreneurs. Specific deliverables, timelines, pricing, and payment terms for each project are defined in a separate written agreement or proposal signed before work begins.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        Upon receipt of full payment, you receive full ownership of the final deliverables created specifically for your project. I retain the right to display the work in my portfolio unless otherwise agreed in writing. All preliminary concepts, drafts, and unused designs remain my property.
      </p>
      <p>
        All content on this website — including text, images, code, and design — is my property and may not be reproduced without written permission.
      </p>
      <h2>Client Responsibilities</h2>
      <p>You agree to:</p>
      <ul>
        <li>Provide accurate project information, content, and feedback in a timely manner.</li>
        <li>Ensure you have the rights to any materials (logos, photos, copy) you provide for the project.</li>
        <li>Make payments according to the agreed schedule.</li>
      </ul>
      <h2>Payment Terms</h2>
      <p>
        Payment terms are specified in each project proposal. Typically, projects require a deposit before work begins, with the balance due upon completion. Late payments may result in paused work. Ownership of deliverables transfers only upon receipt of full payment.
      </p>
      <h2>Revisions and Scope</h2>
      <p>
        Each project proposal specifies the number of included revision rounds. Work outside the agreed scope is billed at my standard hourly rate and will be confirmed in writing before proceeding.
      </p>
      <h2>Termination</h2>
      <p>
        Either party may terminate a project agreement with written notice. You are responsible for payment for all work completed up to the termination date. Deposits are non-refundable once design work has commenced.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        To the fullest extent permitted by law, I am not liable for indirect, incidental, special, or consequential damages arising from the use of this website or my services. My total liability in any circumstance is limited to the amount paid for the specific service in question.
      </p>
      <h2>Disclaimer of Warranties</h2>
      <p>
        This website and its content are provided &quot;as is&quot; without warranties of any kind. I do not guarantee that business results (sales, conversions, leads) will be achieved through my design work, though I strive for results-focused outcomes for every client.
      </p>
      <h2>Governing Law</h2>
      <p>
        These Terms are governed by the laws of the State of California, USA, without regard to conflict of law principles. Any disputes shall be resolved in the courts of San Mateo County, California.
      </p>
      <h2>Changes to These Terms</h2>
      <p>
        I may update these Terms periodically. Continued use of this website after changes constitutes acceptance of the updated Terms.
      </p>
      <h2>Contact</h2>
      <p>For questions about these Terms, contact me at <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function TermsPTBR() {
  return (
    <>
      <h2>Aceitação dos Termos</h2>
      <p>
        Ao acessar romuloquintanilha.com ou contratar meus serviços de design freelance, você concorda em cumprir estes Termos de Serviço. Se não concordar, não utilize este site ou meus serviços.
      </p>
      <h2>Serviços</h2>
      <p>
        Ofereço serviços de web design, identidade de marca, design UX/UI e estratégia digital para negócios locais e empreendedores. As entregas específicas, prazos, preços e condições de pagamento de cada projeto são definidos em um contrato ou proposta separada, assinada antes do início do trabalho.
      </p>
      <h2>Propriedade Intelectual</h2>
      <p>
        Após o recebimento do pagamento integral, você recebe a propriedade total das entregas finais criadas especificamente para o seu projeto. Mantenho o direito de exibir o trabalho no meu portfólio, salvo acordo escrito em contrário. Todos os conceitos preliminares, rascunhos e designs não utilizados permanecem de minha propriedade.
      </p>
      <p>
        Todo o conteúdo deste site — incluindo textos, imagens, código e design — é de minha propriedade e não pode ser reproduzido sem permissão escrita.
      </p>
      <h2>Responsabilidades do Cliente</h2>
      <p>Você concorda em:</p>
      <ul>
        <li>Fornecer informações precisas sobre o projeto, conteúdo e feedback de forma oportuna.</li>
        <li>Garantir que possui os direitos sobre quaisquer materiais (logotipos, fotos, textos) fornecidos para o projeto.</li>
        <li>Realizar os pagamentos conforme o cronograma acordado.</li>
      </ul>
      <h2>Condições de Pagamento</h2>
      <p>
        As condições de pagamento são especificadas em cada proposta de projeto. Tipicamente, os projetos requerem um sinal antes do início, com o saldo restante a pagar na conclusão. Atrasos no pagamento podem resultar na pausa do trabalho. A propriedade das entregas é transferida somente após o recebimento do pagamento integral.
      </p>
      <h2>Revisões e Escopo</h2>
      <p>
        Cada proposta de projeto especifica o número de rodadas de revisão incluídas. Trabalho fora do escopo acordado é cobrado à minha taxa horária padrão e será confirmado por escrito antes de prosseguir.
      </p>
      <h2>Rescisão</h2>
      <p>
        Qualquer das partes pode rescindir um contrato de projeto mediante aviso escrito. Você é responsável pelo pagamento de todo o trabalho concluído até a data de rescisão. Os sinais não são reembolsáveis após o início do trabalho de design.
      </p>
      <h2>Limitação de Responsabilidade</h2>
      <p>
        Na máxima extensão permitida por lei, não sou responsável por danos indiretos, incidentais, especiais ou consequenciais decorrentes do uso deste site ou dos meus serviços. Minha responsabilidade total em qualquer circunstância é limitada ao valor pago pelo serviço específico em questão.
      </p>
      <h2>Isenção de Garantias</h2>
      <p>
        Este site e seu conteúdo são fornecidos &quot;no estado em que se encontram&quot;, sem garantias de qualquer tipo. Não garanto que resultados de negócios (vendas, conversões, leads) serão alcançados por meio do meu trabalho de design, embora me esforce para obter resultados concretos para cada cliente.
      </p>
      <h2>Lei Aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis do Estado da Califórnia, EUA, independentemente de conflitos de princípios legais. Quaisquer disputas serão resolvidas nos tribunais do Condado de San Mateo, Califórnia.
      </p>
      <h2>Alterações nestes Termos</h2>
      <p>
        Posso atualizar estes Termos periodicamente. O uso continuado deste site após as alterações constitui aceitação dos Termos atualizados.
      </p>
      <h2>Contato</h2>
      <p>Para dúvidas sobre estes Termos, entre em contato pelo e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function TermsPTPT() {
  return (
    <>
      <h2>Aceitação dos Termos</h2>
      <p>
        Ao aceder a romuloquintanilha.com ou contratar os meus serviços de design freelance, o utilizador concorda em cumprir estes Termos de Serviço. Se não concordar, não utilize este website ou os meus serviços.
      </p>
      <h2>Serviços</h2>
      <p>
        Ofereço serviços de web design, identidade de marca, design UX/UI e estratégia digital para negócios locais e empreendedores. As entregas específicas, prazos, preços e condições de pagamento de cada projeto são definidos num contrato ou proposta separada, assinada antes do início do trabalho.
      </p>
      <h2>Propriedade Intelectual</h2>
      <p>
        Após a receção do pagamento integral, o utilizador recebe a propriedade total das entregas finais criadas especificamente para o seu projeto. Mantenho o direito de exibir o trabalho no meu portfólio, salvo acordo escrito em contrário. Todos os conceitos preliminares, rascunhos e designs não utilizados permanecem da minha propriedade.
      </p>
      <p>
        Todo o conteúdo deste website — incluindo textos, imagens, código e design — é da minha propriedade e não pode ser reproduzido sem autorização escrita.
      </p>
      <h2>Responsabilidades do Cliente</h2>
      <p>O utilizador concorda em:</p>
      <ul>
        <li>Fornecer informações precisas sobre o projeto, conteúdo e feedback em tempo útil.</li>
        <li>Garantir que possui os direitos sobre quaisquer materiais (logótipos, fotografias, textos) fornecidos para o projeto.</li>
        <li>Efetuar os pagamentos de acordo com o calendário acordado.</li>
      </ul>
      <h2>Condições de Pagamento</h2>
      <p>
        As condições de pagamento são especificadas em cada proposta de projeto. Tipicamente, os projetos requerem um sinal antes do início, com o remanescente a pagar na conclusão. Atrasos no pagamento podem resultar na suspensão do trabalho. A propriedade das entregas é transferida apenas após a receção do pagamento integral.
      </p>
      <h2>Revisões e Âmbito</h2>
      <p>
        Cada proposta de projeto especifica o número de rondas de revisão incluídas. Trabalho fora do âmbito acordado é faturado à minha taxa horária padrão e será confirmado por escrito antes de prosseguir.
      </p>
      <h2>Rescisão</h2>
      <p>
        Qualquer das partes pode rescindir um contrato de projeto mediante aviso escrito. O utilizador é responsável pelo pagamento de todo o trabalho concluído até à data de rescisão. Os sinais não são reembolsáveis após o início do trabalho de design.
      </p>
      <h2>Limitação de Responsabilidade</h2>
      <p>
        Na máxima extensão permitida por lei, não sou responsável por danos indiretos, incidentais, especiais ou consequentes decorrentes da utilização deste website ou dos meus serviços. A minha responsabilidade total em qualquer circunstância é limitada ao valor pago pelo serviço específico em questão.
      </p>
      <h2>Exclusão de Garantias</h2>
      <p>
        Este website e o seu conteúdo são fornecidos &quot;no estado em que se encontram&quot;, sem garantias de qualquer tipo. Não garanto que resultados de negócio (vendas, conversões, leads) serão alcançados através do meu trabalho de design, embora me esforce para obter resultados concretos para cada cliente.
      </p>
      <h2>Lei Aplicável</h2>
      <p>
        Estes Termos são regidos pelas leis do Estado da Califórnia, EUA. Quaisquer litígios serão resolvidos nos tribunais do Condado de San Mateo, Califórnia.
      </p>
      <h2>Alterações a Estes Termos</h2>
      <p>
        Posso atualizar estes Termos periodicamente. A utilização continuada deste website após as alterações constitui aceitação dos Termos atualizados.
      </p>
      <h2>Contacto</h2>
      <p>Para questões sobre estes Termos, contacte-me através do e-mail <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

function TermsES() {
  return (
    <>
      <h2>Aceptación de los Términos</h2>
      <p>
        Al acceder a romuloquintanilha.com o contratar mis servicios de diseño freelance, aceptas quedar vinculado por estos Términos de Servicio. Si no estás de acuerdo, no uses este sitio web ni mis servicios.
      </p>
      <h2>Servicios</h2>
      <p>
        Ofrezco servicios de diseño web, identidad de marca, diseño UX/UI y estrategia digital para negocios locales y emprendedores. Las entregas específicas, plazos, precios y condiciones de pago de cada proyecto se definen en un contrato o propuesta separada, firmada antes del inicio del trabajo.
      </p>
      <h2>Propiedad Intelectual</h2>
      <p>
        Tras la recepción del pago completo, recibes la propiedad total de las entregas finales creadas específicamente para tu proyecto. Me reservo el derecho de mostrar el trabajo en mi portafolio, salvo acuerdo escrito en contrario. Todos los conceptos preliminares, borradores y diseños no utilizados permanecen como mi propiedad.
      </p>
      <p>
        Todo el contenido de este sitio web — incluyendo textos, imágenes, código y diseño — es mi propiedad y no puede ser reproducido sin permiso escrito.
      </p>
      <h2>Responsabilidades del Cliente</h2>
      <p>Aceptas:</p>
      <ul>
        <li>Proporcionar información precisa del proyecto, contenido y comentarios de manera oportuna.</li>
        <li>Garantizar que tienes los derechos sobre cualquier material (logotipos, fotos, textos) que proporciones para el proyecto.</li>
        <li>Realizar los pagos según el calendario acordado.</li>
      </ul>
      <h2>Condiciones de Pago</h2>
      <p>
        Las condiciones de pago se especifican en cada propuesta de proyecto. Normalmente, los proyectos requieren un depósito antes del inicio, con el saldo restante al finalizar. Los retrasos en el pago pueden resultar en la pausa del trabajo. La propiedad de las entregas se transfiere únicamente tras la recepción del pago completo.
      </p>
      <h2>Revisiones y Alcance</h2>
      <p>
        Cada propuesta de proyecto especifica el número de rondas de revisión incluidas. El trabajo fuera del alcance acordado se factura a mi tarifa horaria estándar y se confirmará por escrito antes de proceder.
      </p>
      <h2>Rescisión</h2>
      <p>
        Cualquiera de las partes puede rescindir un contrato de proyecto con aviso escrito. Eres responsable del pago por todo el trabajo completado hasta la fecha de rescisión. Los depósitos no son reembolsables una vez iniciado el trabajo de diseño.
      </p>
      <h2>Limitación de Responsabilidad</h2>
      <p>
        En la máxima medida permitida por la ley, no soy responsable de daños indirectos, incidentales, especiales o consecuentes derivados del uso de este sitio web o mis servicios. Mi responsabilidad total en cualquier circunstancia se limita al importe pagado por el servicio específico en cuestión.
      </p>
      <h2>Exclusión de Garantías</h2>
      <p>
        Este sitio web y su contenido se proporcionan &quot;tal cual&quot;, sin garantías de ningún tipo. No garantizo que se logren resultados de negocio (ventas, conversiones, leads) a través de mi trabajo de diseño, aunque me esfuerzo por obtener resultados concretos para cada cliente.
      </p>
      <h2>Ley Aplicable</h2>
      <p>
        Estos Términos se rigen por las leyes del Estado de California, EUA. Cualquier disputa se resolverá en los tribunales del Condado de San Mateo, California.
      </p>
      <h2>Cambios a Estos Términos</h2>
      <p>
        Puedo actualizar estos Términos periódicamente. El uso continuado de este sitio web tras los cambios constituye la aceptación de los Términos actualizados.
      </p>
      <h2>Contacto</h2>
      <p>Para preguntas sobre estos Términos, contáctame en <a href="mailto:hello@romuloquintanilha.com">hello@romuloquintanilha.com</a>.</p>
    </>
  )
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <LegalLayout title={TITLE[locale] ?? TITLE.en} lastUpdated={LAST_UPDATED[locale] ?? LAST_UPDATED.en}>
      {locale === "pt-BR" && <TermsPTBR />}
      {locale === "pt-PT" && <TermsPTPT />}
      {locale === "es" && <TermsES />}
      {(locale === "en" || !["pt-BR", "pt-PT", "es"].includes(locale)) && <TermsEN />}
    </LegalLayout>
  )
}
