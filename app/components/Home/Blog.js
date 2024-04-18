import Button from '../Button'

function Blog() {
  return (
    <div className="bg-slate-100">
        <section className="flex h-[50vh] p-24 max-w-1440 mx-auto 
        space-x-28 items-center bg-gradient-to-r from-gray-600 to-gray-950 relative
        rounded-t-[50px]">
            <p>Blog</p>
            <div className="bg-gray-900 min-h-80 w-72 rounded-xl text-white">
                <p>Hi</p>
                <Button 
                    type="button"
                    title="Read More"
                    variant="green"
                />
            </div>
        </section>

    </div>
  )
}

export default Blog