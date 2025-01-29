import React from 'react'

function Footer() {
  return (
    <div>
        <section class="bg-white text-center py-12">
    <div class="max-w-3xl mx-auto">
        <h1 class="text-3xl font-bold text-gray-800">
            For every student, <br /> every classroom. <br />
            <span class="text-green-500 underline">Real results.</span>
        </h1>
        <p class="text-gray-600 mt-4 text-lg">
            We're a nonprofit with the mission to provide a free, world-class education for anyone, anywhere.
        </p>
        <div class="mt-8 flex justify-center gap-4">
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Learners
            </button>
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Teachers
            </button>
            <button class="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
                Parents
            </button>
        </div>
    </div>
</section>
    </div>
  )
}

export default Footer