// import React from 'react';
import { RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">AI Solutions</h3>
            <p className="text-gray-300">
              Innovating the future of digital employee experience through AI-powered solutions.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-2">
              <p className="flex items-center">
                <RiMailLine className="mr-2 h-5 w-5" /> contact@ai-solutions.com
              </p>
              <p className="flex items-center">
                <RiPhoneLine className="mr-2 h-5 w-5" /> +44 123 456 7890
              </p>
              <p className="flex items-center">
                <RiMapPinLine className="mr-2 h-5 w-5" /> Sunderland, UK
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add social media links here */}
              {/* dummy links */}
              {/* facebook */}
              <a title='facebook' href="#" className="text-gray-300 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 0.72 0.72" data-name="Flat Color" fill='currentColor' xmlns="http://www.w3.org/2000/svg"><path d="M.42.18h.09A.03.03 0 0 0 .54.15V.09A.03.03 0 0 0 .51.06H.42a.15.15 0 0 0-.15.15V.3H.21a.03.03 0 0 0-.03.03v.06a.03.03 0 0 0 .03.03h.06v.21A.03.03 0 0 0 .3.66h.06A.03.03 0 0 0 .39.63V.42h.067a.03.03 0 0 0 .03-.023l.015-.06A.03.03 0 0 0 .472.3H.39V.21A.03.03 0 0 1 .42.18" /></svg>
              </a>

              {/* twitter */}
              <a href="#" title='twitter' className="text-gray-300 hover:text-white">
              <svg width="24" height="24" viewBox="0 0 0.45 0.45" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M.449.044A.015.015 0 0 0 .423.035a.1.1 0 0 1-.037.023.1.1 0 0 0-.07-.028.106.106 0 0 0-.106.106v.013A.18.18 0 0 1 .059.04.015.015 0 0 0 .032.039Q-.016.134.018.214q.03.07.117.106a.2.2 0 0 1-.12.04.015.015 0 0 0-.008.027C.055.42.106.42.154.42h.001A.264.264 0 0 0 .419.156V.142A.1.1 0 0 0 .444.105a.14.14 0 0 0 .005-.06"/>
              </svg>


              </a>

              {/* linkedin */}
              <a href="#" title='linkedin' className="text-gray-300 hover:text-white">
              <svg width="24" height="24" fill="currentColor" viewBox="0 0 0.72 0.72" xmlns="http://www.w3.org/2000/svg"><path d="M.525.27a.2.2 0 0 0-.077.019A.03.03 0 0 0 .42.27H.3A.03.03 0 0 0 .27.3v.36A.03.03 0 0 0 .3.69h.12A.03.03 0 0 0 .45.66V.495a.03.03 0 1 1 .06 0V.66a.03.03 0 0 0 .03.03h.12A.03.03 0 0 0 .69.66V.435A.165.165 0 0 0 .525.27M.63.63H.57V.495a.09.09 0 1 0-.18 0V.63H.33v-.3h.06v.021A.03.03 0 0 0 .443.37.104.104 0 0 1 .63.435ZM.21.27H.09A.03.03 0 0 0 .06.3v.36a.03.03 0 0 0 .03.03h.12A.03.03 0 0 0 .24.66V.3A.03.03 0 0 0 .21.27M.18.63H.12v-.3h.06ZM.15.046A.097.097 0 1 0 .148.24h.001A.097.097 0 1 0 .15.046M.149.18H.148A.037.037 0 0 1 .107.143C.107.121.124.106.15.106a.037.037 0 0 1 .042.037C.192.165.175.18.149.18"/></svg>
              </a>

              {/* instagram */}
              <a href="#" title='instagram' className="text-gray-300 hover:text-white">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">© 2024 AI Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};