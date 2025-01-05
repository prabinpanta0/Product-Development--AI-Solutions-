import { useState } from 'react';
import { useStore } from '../../store/store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../app/components/ui/card';
import { FaTrash } from 'react-icons/fa';

export const Inquiries = () => {
  const { contactForms, ratings, deleteContactForm, deleteRating } = useStore();
  const [notification, setNotification] = useState<string | null>(null);

  const handleDeleteContactForm = (id: string) => {
    deleteContactForm(id);
    setNotification('Inquiry successfully deleted');
    setTimeout(() => setNotification(null), 3000);
  };

  const handleDeleteRating = (id: string) => {
    deleteRating(id);
    setNotification('Inquiry successfully deleted');
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <div style={{ padding: '24px', fontFamily: 'Arial, sans-serif', backgroundColor: '#f8f9fa' }}>
      {notification && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          backgroundColor: '#28a745',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          {notification}
        </div>
      )}
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
            <span>Inquiries</span>
          </CardTitle>
        </div>

        {/* Contact Form Submissions */}
        <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '8px' }}>
          <CardHeader>
            <CardTitle style={{ fontSize: '22px', color: '#007bff', marginBottom: '12px' }}>
              <span>Contact Form Submissions</span>
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
                    <strong><span>Date:</span></strong> <span>{new Date(form.date).toLocaleDateString()}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Email:</span></strong> <span>{form.email}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Phone:</span></strong> <span>{form.phone}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Company:</span></strong> <span>{form.company}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Country:</span></strong> <span>{form.country}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Job Title:</span></strong> <span>{form.jobTitle}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#555' }}>
                    <strong><span>Job Details:</span></strong> <span>{form.jobDetails}</span>
                  </CardDescription>
                  <CardDescription style={{ color: '#777' }}><span>{form.message}</span></CardDescription>
                  <FaTrash
                    onClick={() => handleDeleteContactForm(form.id)}
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
              <span>Customer Ratings</span>
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
                    <span>
                      <CardDescription style={{ fontWeight: '500', color: '#333' }}><span>{rating.userName}</span></CardDescription>
                      <CardDescription style={{ color: '#777' }}>
                        <span>{new Date(rating.date).toLocaleDateString()}</span>
                      </CardDescription>
                    </span>
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
                        <span>★</span>
                      </span>
                    ))}
                  </div>
                  <CardDescription style={{ color: '#555' }}><span>{rating.comment}</span></CardDescription>
                  <FaTrash
                    onClick={() => handleDeleteRating(rating.id)}
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
