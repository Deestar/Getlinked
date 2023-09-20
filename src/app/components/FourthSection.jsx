import Image from "next/image";
import Workers from "../../../public/workers.png";
export default function FourthSection() {
  return (
    <section>
      <div>
        <Image />
      </div>
      <article>
        <header>
          <h2>Judging Criteria</h2>
          <h2>Key attributes</h2>
        </header>
        <ul>
          <li>
            <span> Innovation and Creativity:</span> Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.
          </li>
          <li>
            <span>Functionality:</span>
            Assess how well the solution works. Does it perform its intended
            functions effectively and without major issues? Judges would
            consider the completeness and robustness of the solution.
          </li>
          <li>
            <span>Technical Complexity:</span>
            Evaluate the technical sophistication of the solution. Judges would
            consider the complexity of the code, the use of advanced
            technologies or algorithms, and the scalability of the solution.
          </li>
          <li>
            <span> Adherence to Hackathon Rules:</span>
            Judges will Ensure that the team adhered to the rules and guidelines
            of the hackathon, including deadlines, use of specific technologies
            or APIs, and any other competition-specific requirements.
          </li>
        </ul>
        <button>Read More</button>
      </article>
    </section>
  );
}
