import { useStore } from '../../store/store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../app/components/ui/card';
import { FaTrash } from 'react-icons/fa';

export const Inquiries = () => {
  const { contactForms, ratings, deleteContactForm, deleteRating } = useStore();

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      {/* Grid container */}
      <div
        className="container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}
      >
        {/* Title spans both columns */}
        <div style={{ gridColumn: '1 / -1', textAlign: 'center' }}>
          <CardTitle style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '16px', color: '#333' }}>
            Inquiries
          </CardTitle>
        </div>

        {/* Contact Form Submissions */}
        <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <CardHeader>
            <CardTitle style={{ fontSize: '22px', color: '#007bff', marginBottom: '12px' }}>
              Contact Form Submissions
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {contactForms.map((form) => (
                <div
                  key={form.id}
                  style={{
                    backgroundColor: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}
                >
                  <CardDescription style={{ color: '#555', marginBottom: '4px' }}>
                    <strong>Date:</strong> {new Date(form.date).toLocaleDateString()}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Email:</strong> {form.email}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Phone:</strong> {form.phone}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Company:</strong> {form.company}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Country:</strong> {form.country}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Job Title:</strong> {form.jobTitle}
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong>Job Details:</strong> {form.jobDetails}
                  </CardDescription>
                  <CardDescription style={{ color: '#777' }}>{form.message}</CardDescription>
                  <FaTrash
                    onClick={() => deleteContactForm(form.id)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      color: '#dc3545',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Customer Ratings */}
        <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <CardHeader>
            <CardTitle style={{ fontSize: '22px', color: '#28a745', marginBottom: '12px' }}>
              Customer Ratings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
              {ratings.map((rating) => (
                <div
                  key={rating.id}
                  style={{
                    backgroundColor: '#fff',
                    padding: '16px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <CardDescription style={{ fontWeight: '500', color: '#333' }}>{rating.userName}</CardDescription>
                    <CardDescription style={{ color: '#777' }}>
                      {new Date(rating.date).toLocaleDateString()}
                    </CardDescription>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span
                        key={i}
                        style={{
                          fontSize: '20px',
                          color: i < rating.rating ? '#ffc107' : '#e4e5e9',
                          marginRight: '4px'
                        }}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <CardDescription style={{ color: '#555' }}>{rating.comment}</CardDescription>
                  <FaTrash
                    onClick={() => deleteRating(rating.id)}
                    style={{
                      position: 'absolute',
                      top: '8px',
                      right: '8px',
                      color: '#dc3545',
                      cursor: 'pointer'
                    }}
                  />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
