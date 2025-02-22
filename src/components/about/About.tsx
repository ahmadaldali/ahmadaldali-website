export default function About() {
  return (
    <section id="about" className="" aria-label="About me">

    <div className="container mx-auto">
        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Summary</h2>
            <p>I have over four years of experience in software development, focusing on delivering high-quality work. I approach challenges positively and am always eager to enhance my skills in the field.</p>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Skills</h2>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>Languages & Frameworks:</strong> PHP, Laravel, JavaScript, TypeScript, Svelte, jQuery, Vue.js, Java, Flutter</li>
                <li><strong>Web Development:</strong> HTML, CSS, Tailwind CSS, Bootstrap, AJAX</li>
                <li><strong>Databases:</strong> MySQL, MongoDB, GraphQL</li>
                <li><strong>Tools & Technologies:</strong> AWS, Unity</li>
                <li><strong>Development Practices:</strong> OOP, Design Patterns, Agile Methodologies</li>
                <li><strong>Version Control:</strong> Git</li>
                <li><strong>Operating Systems:</strong> Linux</li>
                <li><strong>Soft Skills:</strong> Team Management, Leadership, Fast Learner, Ability to Work Under Pressure</li>
            </ul>
        </section>

        <section className="mb-6">
            <h2 className="text-2xl font-semibold mb-2">Goals</h2>
            <ul className="list-disc list-inside space-y-1">
                <li><strong>2024 Achievements:</strong> Learned Svelte and Tailwind CSS.</li>
                <li><strong>2025 Goal:</strong> Currently learning Django and building my website using Next.js.</li>
            </ul>
        </section>
        </div>
        
    </section>
  );
}
