import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { track } from '../utils/analytics'

interface Props {
  slug: string | null
  onClose: () => void
}

export default function BlogModal({ slug, onClose }: Props) {
  const navigate = useNavigate()

  // Track and navigate to dedicated blog post page
  useEffect(() => {
    if (slug) {
      track({ type: 'blog_modal_open', slug })
      navigate(`/blog/${slug}`)
      onClose()
    }
  }, [slug, navigate, onClose])

  // This component just handles navigation, no visual rendering needed
  return null
}
