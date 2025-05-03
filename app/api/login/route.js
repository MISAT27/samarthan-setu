export async function POST(req) {
    const body = await req.json();
    const { email, password } = body;
  
    if (email === 'admin@gmail.com' && password === 'password') {
      return new Response(JSON.stringify({ message: 'Logged in!' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      });
    }
  
    return new Response(JSON.stringify({ message: 'Invalid credentials' }), {
      status: 401,
      headers: { 'Content-Type': 'application/json' }
    });
  }
  