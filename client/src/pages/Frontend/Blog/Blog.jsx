import React from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation

const blogPosts = [
  {
    title: "Bridging Education Gaps in underprivileged areas",
    excerpt:
      "Education is a fundamental human right. Learn how we’re working to give every child the chance to learn, regardless of their circumstances.",
    img: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800", // sample
  },
  {
    title: "Clean Water Projects & Impact Stories",
    excerpt:
      "Water is life. See how communities are transformed when safe water becomes accessible.",
    img: "https://images.unsplash.com/photo-1517685352821-92cf88aee5a5?w=800",
  },
  {
    title: "Feeding the Hungry — Outreach Programs",
    excerpt:
      "When someone is hungry, every meal counts. Explore how our food programs bring hope to many.",
    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800",
  },
  {
    title: "Healthcare & Medical Camps for Those in Need",
    excerpt:
      "Access to healthcare shouldn’t depend on income. Our medical camps reach remote areas.",
    img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?w=800",
  },
  {
    title: "Stories of Our Volunteers",
    excerpt:
      "Behind every campaign is a volunteer. Hear their stories, their challenges, and their triumphs.",
    img: "https://images.unsplash.com/photo-1565009696295-18cc68b47566?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8U3RvcmllcyUyMG9mJTIwT3VyJTIwVm9sdW50ZWVyc3xlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Sustainable Farming Initiatives",
    excerpt:
      "Our agricultural projects empower local farmers with tools, training, and resources to feed their communities sustainably.",
    img: "https://images.unsplash.com/photo-1681890997695-acb590943298?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fFN1c3RhaW5hYmxlJTIwRmFybWluZyUyMEluaXRpYXRpdmVzfGVufDB8fDB8fHww",
  },
];

const Blog = () => {
  const navigate = useNavigate(); // ✅ hook for navigation

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1560521166-acee80c7dfe5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGRvbmF0aW9uJTIwYmxvZ3xlbnwwfHwwfHx8MA%3D%3D')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold">Charity Blog</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Stories of hope, compassion, and change from our global community
          </p>
        </div>
      </section>

      {/* Section 1: Why we write */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Why We Share Our Stories
        </h2>
        <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
          Every donation has a story behind it — a life changed, a hope
          restored. Our blog is where we bring you closer to the impact, letting
          you follow the journey, see the faces, and feel the difference your
          support makes.
        </p>
      </section>

      {/* Section 2: Featured Posts */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Featured Stories
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, idx) => (
            <div
              key={idx}
              className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition"
            >
              <img
                src={post.img}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-semibold mb-2 text-green-700">
                  {post.title}
                </h3>
                <p className="text-gray-600 flex-1">{post.excerpt}</p>
                <button className="mt-4 text-green-700 font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Section 3: Deep Dive */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto grid gap-12 lg:grid-cols-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1548102268-3d7dc56b01e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZG9uYXRpb24lMjBibG9nJTIwZWR1YWNhdGlvbiUyMGltcGFjdHxlbnwwfHwwfHx8MA%3D%3D"
            alt="impact"
            className="rounded-lg shadow-lg"
          />
          <div>
            <h2 className="text-3xl font-bold text-green-700 mb-4">
              When Education Meets Opportunity
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Many children in remote areas lack basic resources — books,
              teachers, classrooms. Through our education campaign, we’ve built
              partnerships to supply digital classrooms, train local teachers,
              and provide scholarships. The ripple effect goes far beyond one
              student.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Learn how we collaborate with local communities, government
              bodies, and volunteer networks to make sure no child is left
              behind.
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Volunteer Spotlights */}
      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">
          Volunteer Spotlights
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Aisha’s Journey</h3>
            <p className="text-gray-700">
              From a small village, Aisha joined our volunteer force and helped
              deliver food to 200 households in her first week. “I realized
              small actions can change lives,” she says.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Michael’s Mission</h3>
            <p className="text-gray-700">
              Michael traveled 100 km to join a health awareness camp. He
              mobilized local youth groups to help him. His enthusiasm inspired
              others to join.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">Grace in Action</h3>
            <p className="text-gray-700">
              Grace used her photography skills to document our camp in
              flood-affected areas, helping raise awareness and funds.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-4">
          Join Us in Making a Difference
        </h2>
        <p className="text-gray-700 mb-6">
          Whether you donate, volunteer, or simply spread the word, your support
          can change lives. Together, we build a better world.
        </p>
        <button
          onClick={() => navigate("/donations")} // ✅ navigate on click
          className="px-8 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700"
        >
          Donate Now
        </button>
      </section>
    </div>
  );
};

export default Blog;
