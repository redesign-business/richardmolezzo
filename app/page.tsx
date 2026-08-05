const callHref = "tel:+17755447233";
const callLabel = "Call (775) 544-SAFE";

export default function Home() {
  return (
    <main>
      <div className="notice">
        <span>RENO, NEVADA</span>
        <span>24-HOUR ATTORNEY LINE</span>
        <a href={callHref}>{callLabel}</a>
      </div>

      <nav aria-label="Main navigation">
        <a className="brand" href="#top" aria-label="Richard Molezzo home">
          <strong>RICHARD MOLEZZO</strong>
          <span>VETERAN TRIAL ATTORNEY</span>
        </a>
        <div className="navlinks">
          <a href="#experience">Experience</a>
          <a href="#practice">Practice Areas</a>
          <a href="#approach">Approach</a>
        </div>
        <a className="button navbutton" href={callHref}>{callLabel}</a>
      </nav>

      <header className="hero" id="top">
        <img
          className="heroimage"
          src="/images/richardmolezzo-washoecountycourthouse-59b90715fc.jpg"
          alt="Washoe County Courthouse"
        />
        <div className="heroshade" />
        <div className="herocontent">
          <p className="eyebrow">Civil &amp; Criminal Litigation · Reno, NV</p>
          <h1>Common sense.<br /><em>Serious defense.</em></h1>
          <p className="lede">Clear counsel and case-hardened advocacy from an attorney who tells you what you need to hear, not what is easiest to say.</p>
          <a className="button light" href={callHref}>{callLabel}<span>↗</span></a>
        </div>
        <div className="casecard">
          <span className="caseindex">THE RECORD / 01</span>
          <strong>1,500+</strong>
          <p>State and federal cases across 22 years of litigation.</p>
        </div>
      </header>

      <section className="proofbar" aria-label="Firm highlights">
        <div><b>22</b><span>Years in litigation</span></div>
        <div><b>1,500+</b><span>State &amp; federal cases</span></div>
        <div><b>AV</b><span>Peer rated</span></div>
        <div><b>24/7</b><span>Direct attorney access</span></div>
      </section>

      <section className="record section" id="experience">
        <div className="recordcopy">
          <p className="eyebrow dark">The experience to stand firm</p>
          <h2>Prepared for the room where it matters.</h2>
          <p className="intro">Richard “Mo” Molezzo has spent more than two decades inside the court system, handling civil and criminal litigation in state and federal courts.</p>
          <div className="rule" />
          <p>Every case gets practical scrutiny: confidential peer review, focus groups before trial, jury selection workshops, and a trusted network of top legal professionals when the work demands it.</p>
          <a className="textlink" href={callHref}>{callLabel} <span>→</span></a>
        </div>
        <figure className="recordvisual">
          <img src="/images/richardmolezzo-atcourt-15bbf346b9.jpg" alt="Richard Molezzo at the courthouse" />
          <figcaption><span>COMPLETE. CAPABLE.</span> Legal services grounded in real courtroom experience.</figcaption>
        </figure>
      </section>

      <section className="credentials section">
        <div className="credentialphoto">
          <img src="/images/jmo_1758-richie-portrait-courtroom-e11873d753.jpg" alt="Richard Molezzo in a courtroom" />
          <p>“You’ve got a right to justice. Don’t get left settling for less.”</p>
        </div>
        <div className="credentialcopy">
          <p className="eyebrow">Recognized by peers. Built for trial.</p>
          <h2>Credentials that carry weight.</h2>
          <p>Professional recognition matters because judgment, ethics, and courtroom preparation matter.</p>
          <div className="badges">
            <div className="badge"><img src="/images/av-rating-thumbnail-badge-d2cadd567a.png" alt="AV peer rating badge" /><span>AV rated by Martindale-Hubbell</span></div>
            <div className="badge"><img src="/images/trial-lawyers-college-thumbnail-badge-2-fcadb450a1.png" alt="Trial Lawyers College badge" /><span>Member, Trial Lawyers College</span></div>
            <div className="badge"><img src="/images/ncdc-logo-2-4946756cba.jpg" alt="National College for DUI Defense logo" /><span>Member, National College for DUI Defense</span></div>
          </div>
          <a className="button light" href={callHref}>{callLabel}<span>↗</span></a>
        </div>
      </section>

      <section className="practice section" id="practice">
        <div className="practicehead">
          <div><p className="eyebrow dark">Practice areas</p><h2>Broad experience.<br />Focused representation.</h2></div>
          <p>From serious criminal charges to civil disputes and personal injury, every matter begins with a direct assessment of what is at stake.</p>
        </div>
        <div className="practicegrid">
          <article>
            <span>01</span><h3>Criminal Defense</h3>
            <p>DUI, domestic violence, drug crimes, federal charges, white collar crimes, violent crimes, probation violations, and more.</p>
            <a href={callHref}>Discuss your case →</a>
          </article>
          <article>
            <span>02</span><h3>Civil Litigation</h3>
            <p>Steady, practical representation through difficult disputes, from early resolution through trial.</p>
            <a href={callHref}>Discuss your case →</a>
          </article>
          <article className="imagearticle">
            <img src="/images/ef567048-ab15-40b5-bbb1-abee807bb061-a6cb8909e4.jpg" alt="Richard Molezzo preparing for court" />
          </article>
          <article>
            <span>03</span><h3>Personal Injury</h3>
            <p>Clear-eyed advocacy for people seeking fair treatment after an injury changed the course of their lives.</p>
            <a href={callHref}>Discuss your case →</a>
          </article>
        </div>
      </section>

      <section className="approach section" id="approach">
        <div className="approachimage">
          <img src="/images/richardmolezzo-welcome-1-b8d11db845.jpg" alt="Richard Molezzo speaking with a client" />
          <div><b>24/7</b><span>CLIENT-ONLY<br />DEDICATED HOTLINE</span></div>
        </div>
        <div className="approachcopy">
          <p className="eyebrow dark">No mysterious lawyer tricks</p>
          <h2>You stay informed. Always.</h2>
          <p className="intro">Clients get direct, around-the-clock access to an attorney and the honest information needed to make sound decisions.</p>
          <ol>
            <li><span>01</span><div><b>Clear communication</b><p>Complex issues explained in plain language.</p></div></li>
            <li><span>02</span><div><b>Total transparency</b><p>The truth about your position, options, and next move.</p></div></li>
            <li><span>03</span><div><b>Practical access</b><p>Competitive flat fees, flexible payment plans, and a dedicated hotline.</p></div></li>
          </ol>
          <a className="button darkbutton" href={callHref}>{callLabel}<span>↗</span></a>
        </div>
      </section>

      <section className="faq section">
        <div className="faqcopy">
          <p className="eyebrow dark">Straight answers</p>
          <h2>Before you call.</h2>
          <details open><summary>Can I reach an attorney after hours?<span>+</span></summary><p>Yes. Clients have access to an attorney 24/7 through a client-only dedicated hotline. New matters can call the 24-hour attorney line.</p></details>
          <details><summary>What kinds of cases does the firm handle?<span>+</span></summary><p>Criminal defense matters, civil litigation, and personal injury cases in Nevada state and federal courts.</p></details>
          <details><summary>How are fees handled?<span>+</span></summary><p>The firm offers competitive flat-rate fees and a variety of flexible payment plans.</p></details>
        </div>
        <div className="faqimage">
          <img src="/images/richardmolezzo.com-richardmolezzo-0fb8ffe71d.png" alt="Richard Molezzo, attorney at law" />
          <div><span>RICHARD “MO” MOLEZZO</span><b>Veteran Trial Attorney</b></div>
        </div>
      </section>

      <section className="finalcta">
        <img src="/images/jmo_1785-5ad18cdedb.jpg" alt="Richard Molezzo in court" />
        <div className="heroshade" />
        <div>
          <p className="eyebrow">Your next step can be a clear one.</p>
          <h2>Tell Richard<br />what happened.</h2>
          <p>Available around the clock for urgent legal matters.</p>
          <a className="button light" href={callHref}>{callLabel}<span>↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footerbrand"><strong>RICHARD MOLEZZO</strong><span>VETERAN TRIAL ATTORNEY</span></div>
        <div><b>Main Office</b><span>320 W Liberty St.<br />Reno, NV 89501</span></div>
        <div><b>Office</b><span>(775) 686-6626</span></div>
        <a href={callHref}>{callLabel}</a>
        <small>© {new Date().getFullYear()} Richard Molezzo, Esq. PC</small>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;background:#f2eee7;color:#171b1e;font-family:Arial,Helvetica,sans-serif}a{color:inherit;text-decoration:none}main{overflow:hidden}.notice{height:35px;background:#b89a62;color:#101416;display:flex;align-items:center;justify-content:center;gap:38px;font-size:10px;font-weight:800;letter-spacing:.16em}.notice a{border-left:1px solid #806d49;padding-left:38px}nav{height:94px;background:#f7f4ed;display:flex;align-items:center;padding:0 5vw;border-bottom:1px solid #d2cdc3;position:relative;z-index:4}.brand{display:flex;flex-direction:column;line-height:1}.brand strong,.footerbrand strong{font-family:Georgia,serif;font-size:20px;letter-spacing:.04em}.brand span,.footerbrand span{font-size:8px;letter-spacing:.35em;margin-top:8px;color:#8b6d38}.navlinks{display:flex;gap:34px;margin-left:auto;margin-right:38px;font-size:12px;font-weight:700}.navlinks a:hover{color:#8c6a31}.button{display:inline-flex;align-items:center;justify-content:space-between;gap:30px;background:#b89a62;color:#111820;padding:17px 22px;font-size:11px;font-weight:900;letter-spacing:.08em;text-transform:uppercase;min-width:190px}.button span{font-size:18px}.navbutton{min-width:170px;padding:14px 17px}.hero{height:710px;position:relative;background:#172127;color:white}.heroimage,.finalcta>img{width:100%;height:100%;object-fit:cover;position:absolute;inset:0}.heroshade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,17,21,.92) 0%,rgba(10,20,25,.66) 46%,rgba(11,19,22,.13) 78%),linear-gradient(0deg,rgba(5,12,15,.35),transparent 50%)}.herocontent{position:absolute;left:8vw;top:50%;transform:translateY(-51%);max-width:700px}.eyebrow{text-transform:uppercase;font-size:11px;font-weight:800;letter-spacing:.22em;color:#d4b878;margin:0 0 25px}.eyebrow:before{content:"";display:inline-block;width:35px;border-top:1px solid currentColor;margin:0 14px 3px 0}.eyebrow.dark{color:#8c6a31}.hero h1{font-family:Georgia,serif;font-size:clamp(55px,7vw,98px);font-weight:400;line-height:.9;letter-spacing:-.045em;margin:0}.hero h1 em{color:#cfb272;font-weight:400}.lede{font-family:Georgia,serif;font-size:18px;line-height:1.6;max-width:570px;color:#d3d5d2;margin:30px 0}.light{background:#f4f0e7}.casecard{position:absolute;right:0;bottom:0;width:330px;background:#b89a62;color:#11181b;padding:29px 36px}.caseindex{display:block;font-size:9px;letter-spacing:.16em;font-weight:bold;border-bottom:1px solid #806d49;padding-bottom:15px;margin-bottom:15px}.casecard strong{font-family:Georgia,serif;font-size:46px;font-weight:400}.casecard p{font-size:12px;line-height:1.5;margin:6px 0 0}.proofbar{min-height:118px;background:#101a1e;color:#fff;display:grid;grid-template-columns:repeat(4,1fr);padding:0 7vw}.proofbar div{display:flex;align-items:center;gap:18px;border-right:1px solid #344044;padding:20px 30px}.proofbar div:first-child{border-left:1px solid #344044}.proofbar b{font-family:Georgia,serif;color:#cfb272;font-size:31px;font-weight:400}.proofbar span{font-size:10px;text-transform:uppercase;line-height:1.4;letter-spacing:.12em}.section{padding:110px 8vw}.record{display:grid;grid-template-columns:.9fr 1.1fr;gap:9vw;align-items:center}.recordcopy h2,.practice h2,.approach h2,.faq h2{font-family:Georgia,serif;font-size:clamp(42px,5vw,69px);font-weight:400;line-height:1.02;letter-spacing:-.035em;margin:0 0 28px}.intro{font-family:Georgia,serif;font-size:21px;line-height:1.55}.recordcopy>p:not(.eyebrow):not(.intro){line-height:1.7;color:#5e6262}.rule{border-top:1px solid #c9c2b5;margin:27px 0}.textlink{font-size:11px;display:inline-flex;gap:34px;text-transform:uppercase;font-weight:900;letter-spacing:.1em;border-bottom:1px solid #181c1d;padding-bottom:8px;margin-top:15px}.recordvisual{margin:0;position:relative;height:610px}.recordvisual img{width:100%;height:100%;object-fit:cover;filter:saturate(.75)}.recordvisual:before{content:"";position:absolute;z-index:2;inset:-18px 22px 18px -18px;border:1px solid #b89a62;pointer-events:none}.recordvisual figcaption{position:absolute;bottom:0;left:0;width:65%;padding:24px 28px;background:#101a1e;color:#cdd0ce;font-family:Georgia,serif;font-size:15px;line-height:1.5}.recordvisual figcaption span{display:block;color:#d2b473;font-family:Arial,sans-serif;font-size:9px;letter-spacing:.17em;margin-bottom:8px}.credentials{background:#101a1e;color:#fff;display:grid;grid-template-columns:1fr 1fr;padding:0}.credentialphoto{height:720px;position:relative}.credentialphoto>img{width:100%;height:100%;object-fit:cover;filter:grayscale(35%)}.credentialphoto>p{position:absolute;bottom:0;right:0;width:70%;background:#b89a62;color:#101719;margin:0;padding:35px;font-family:Georgia,serif;font-size:21px;line-height:1.35}.credentialcopy{padding:95px 8vw 80px 7vw}.credentialcopy h2{font:400 clamp(42px,5vw,68px)/1.03 Georgia,serif;margin:0 0 20px}.credentialcopy>p:not(.eyebrow){color:#afb4b4;line-height:1.65}.badges{margin:34px 0}.badge{display:grid;grid-template-columns:115px 1fr;gap:25px;align-items:center;border-top:1px solid #354043;padding:16px 0;font-size:12px;text-transform:uppercase;letter-spacing:.1em}.badge:last-child{border-bottom:1px solid #354043}.badge img{max-width:105px;max-height:54px;object-fit:contain;background:#fff;padding:5px}.practice{background:#f6f3ec}.practicehead{display:grid;grid-template-columns:1fr .6fr;gap:9vw;align-items:end;margin-bottom:65px}.practicehead p:last-child{line-height:1.7;color:#616565;padding-bottom:10px}.practicegrid{display:grid;grid-template-columns:repeat(4,1fr);min-height:430px}.practicegrid article{border:1px solid #c9c3b8;border-right:0;padding:36px 27px;display:flex;flex-direction:column}.practicegrid article:last-child{border-right:1px solid #c9c3b8}.practicegrid article>span{color:#9a7941;font-size:10px;letter-spacing:.15em}.practicegrid h3{font:400 27px Georgia,serif;margin:70px 0 20px}.practicegrid p{font-size:13px;line-height:1.65;color:#666}.practicegrid a{font-size:10px;text-transform:uppercase;letter-spacing:.1em;font-weight:bold;margin-top:auto}.practicegrid .imagearticle{padding:0;overflow:hidden}.imagearticle img{width:100%;height:100%;object-fit:cover;filter:grayscale(30%)}.approach{display:grid;grid-template-columns:1fr 1fr;gap:8vw;align-items:center}.approachimage{height:660px;position:relative}.approachimage>img{width:100%;height:100%;object-fit:cover}.approachimage>div{position:absolute;bottom:0;right:-45px;background:#b89a62;padding:25px 30px;display:flex;align-items:center;gap:20px}.approachimage b{font:400 42px Georgia,serif}.approachimage span{font-size:9px;line-height:1.5;letter-spacing:.15em;font-weight:bold}.approachcopy ol{list-style:none;padding:0;margin:35px 0}.approachcopy li{display:flex;gap:25px;padding:19px 0;border-top:1px solid #c9c2b5}.approachcopy li>span{font-size:10px;color:#98753b}.approachcopy li b{font:400 19px Georgia,serif}.approachcopy li p{font-size:12px;color:#686b6a;margin:5px 0 0}.darkbutton{background:#111b1f;color:#fff}.faq{background:#ded8cc;display:grid;grid-template-columns:1fr .75fr;gap:9vw}.faq details{border-top:1px solid #aaa398;padding:20px 0}.faq details:last-child{border-bottom:1px solid #aaa398}.faq summary{display:flex;justify-content:space-between;cursor:pointer;font:400 17px Georgia,serif;list-style:none}.faq details p{font-size:13px;line-height:1.6;color:#5e625f;max-width:520px}.faqimage{height:590px;position:relative;background:#172126}.faqimage img{width:100%;height:100%;object-fit:cover;object-position:top}.faqimage>div{position:absolute;bottom:0;left:0;right:0;background:#111b1ee8;color:white;padding:24px}.faqimage span{display:block;font-size:9px;color:#cdb174;letter-spacing:.15em;margin-bottom:7px}.faqimage b{font:400 18px Georgia,serif}.finalcta{height:630px;position:relative;color:#fff}.finalcta>div:last-child{position:absolute;left:8vw;top:50%;transform:translateY(-50%)}.finalcta h2{font:400 clamp(55px,7vw,94px)/.92 Georgia,serif;margin:0}.finalcta p:not(.eyebrow){color:#d7d8d4;margin:25px 0}.finalcta .heroshade{background:linear-gradient(90deg,rgba(6,16,20,.94),rgba(8,17,20,.7) 50%,rgba(8,17,20,.12))}footer{min-height:210px;background:#0f191d;color:#d8dbd8;padding:55px 7vw 30px;display:grid;grid-template-columns:1.5fr 1fr .7fr 1fr;gap:35px;align-items:start;font-size:11px}footer>div{display:flex;flex-direction:column;gap:9px}footer b{color:#c6a96d;text-transform:uppercase;letter-spacing:.14em;font-size:9px}footer span{line-height:1.7}footer>a{color:#d0b474;font-weight:bold;text-transform:uppercase;letter-spacing:.08em}footer small{grid-column:1/-1;border-top:1px solid #334044;padding-top:22px;color:#747c7d;font-size:9px}
        @media(max-width:850px){.notice span:first-child,.navlinks{display:none}.notice{justify-content:space-between;padding:0 20px;gap:10px}.notice a{padding-left:12px}nav{height:78px;padding:0 20px}.navbutton{display:none}.hero{height:680px}.herocontent{left:24px;right:24px;top:42%}.hero h1{font-size:55px}.lede{font-size:16px}.casecard{width:270px;padding:20px 24px}.proofbar{grid-template-columns:1fr 1fr;padding:0}.proofbar div{border-bottom:1px solid #344044;padding:20px}.proofbar div:first-child{border-left:0}.section{padding:75px 24px}.record,.credentials,.approach,.faq{grid-template-columns:1fr}.record{gap:60px}.recordvisual{height:470px}.credentials{padding:0}.credentialphoto{height:520px}.credentialcopy{padding:70px 24px}.practicehead{grid-template-columns:1fr;gap:15px}.practicegrid{grid-template-columns:1fr 1fr}.practicegrid article:nth-child(2){border-right:1px solid #c9c3b8}.practicegrid article{min-height:330px}.practicegrid h3{margin-top:40px}.approach{gap:65px}.approachimage{height:490px}.approachimage>div{right:0}.faqimage{height:500px;grid-row:1}.finalcta{height:600px}.finalcta>div:last-child{left:24px;right:24px}.finalcta h2{font-size:56px}footer{grid-template-columns:1fr 1fr}.footerbrand{grid-column:1/-1}footer small{grid-column:1/-1}}
        @media(max-width:520px){.brand strong{font-size:17px}.hero h1{font-size:47px}.proofbar b{font-size:25px}.proofbar span{font-size:8px}.proofbar div{gap:10px;padding:17px 14px}.recordcopy h2,.practice h2,.approach h2,.faq h2,.credentialcopy h2{font-size:40px}.recordvisual{height:400px}.credentialphoto{height:430px}.credentialphoto>p{width:88%;font-size:17px;padding:24px}.badge{grid-template-columns:95px 1fr;gap:12px}.badge img{max-width:90px}.practicegrid{grid-template-columns:1fr}.practicegrid article,.practicegrid article:nth-child(2){border-right:1px solid #c9c3b8;border-bottom:0}.practicegrid article:last-child{border-bottom:1px solid #c9c3b8}.imagearticle{height:360px}.approachimage{height:410px}.approachimage>div{padding:18px}.approachimage b{font-size:33px}.faqimage{height:410px}footer{grid-template-columns:1fr}.footerbrand,footer small{grid-column:1}.navbutton{display:none}}
      ` }} />
    </main>
  );
}
