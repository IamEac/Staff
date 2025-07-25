import React, { useState } from 'react';
import { 
  Users, Calendar, MessageSquare, Bell, CheckCircle, XCircle, 
  Send, Clock, AlertCircle,
  ChevronUp,
  MessageCircle,
  UtensilsCrossed, Info
} from 'lucide-react';

const StaffPortal = () => {
  // Mock user data
  const [currentUser, setCurrentUser] = useState({
    id: 1,
    name: 'Maria Rodriguez',
    role: 'manager', // 'manager' or 'salesperson'
    email: 'maria.rodriguez@diamondvenue.com'
  });

  // Tab management
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyText, setReplyText] = useState('');
  const [showEventDetails, setShowEventDetails] = useState(false);
  const [newNote, setNewNote] = useState('');

  // Customer modifications pending approval
  const [modifications, setModifications] = useState([
    {
      id: 1,
      eventId: 'EV2024001',
      customerName: 'John Doe',
      type: 'Guest Count Update',
      field: 'guestCount',
      oldValue: '100',
      newValue: '120',
      date: '2025-06-07',
      status: 'pending',
      priceImpact: '+$1,500'
    },
    {
      id: 2,
      eventId: 'EV2024001',
      customerName: 'John Doe',
      type: 'Menu Change',
      field: 'menu',
      oldValue: 'Classic Menu',
      newValue: 'Premium Menu',
      date: '2025-06-08',
      status: 'pending',
      priceImpact: '+$2,000'
    },
    {
      id: 3,
      eventId: 'EV2024001',
      customerName: 'John Doe',
      type: 'Table Layout Change',
      field: 'tableLayout',
      oldValue: 'Round Tables (8 guests)',
      newValue: 'Mixed Layout',
      date: '2025-06-09',
      status: 'pending',
      priceImpact: '+$500'
    }
  ]);

  // Supplier contacts
  const [suppliers] = useState([
    {
      id: 1,
      name: 'Elite Catering Co.',
      email: 'contact@elitecatering.com',
      type: 'Catering',
      lastContact: '2025-06-01'
    },
    {
      id: 2,
      name: 'Floral Dreams',
      email: 'orders@floraldreams.com',
      type: 'Decorations',
      lastContact: '2025-05-28'
    },
    {
      id: 3,
      name: 'Sound & Light Pro',
      email: 'info@soundlightpro.com',
      type: 'AV Equipment',
      lastContact: '2025-05-25'
    },
    {
      id: 4,
      name: 'Sweet Celebrations Bakery',
      email: 'orders@sweetcelebrations.com',
      type: 'Cakes & Desserts',
      lastContact: '2025-05-20'
    }
  ]);

  // Email composition
  const [emailComposition, setEmailComposition] = useState({
    to: '',
    subject: '',
    body: '',
    supplierName: ''
  });

  // Customer messages
  const [customerMessages, setCustomerMessages] = useState([
    {
      id: 1,
      customerId: 1,
      customerName: 'John Doe',
      eventId: 'EV2024001',
      message: 'Can we add a chocolate fountain to our dessert options?',
      timestamp: '2025-06-08 10:30 AM',
      status: 'unread',
      responses: []
    },
    {
      id: 2,
      customerId: 1,
      customerName: 'John Doe',
      eventId: 'EV2024001',
      message: 'We need to arrange transportation for elderly guests',
      timestamp: '2025-06-08 09:15 AM',
      status: 'read',
      responses: [
        {
          message: 'We can arrange a shuttle service. How many guests need transportation?',
          timestamp: '2025-06-08 09:45 AM',
          author: 'Carlos Mendez'
        }
      ]
    }
  ]);

  // Event notes
  const [eventNotes, setEventNotes] = useState({});

  // Comprehensive events data
  const [events, setEvents] = useState([
    {
      id: 'EV2024001',
      customerName: 'John Doe',
      customerEmail: 'john.doe@email.com',
      customerPhone: '(305) 555-1234',
      type: 'Wedding',
      date: '2025-07-15',
      time: '6:00 PM - 11:00 PM',
      venue: 'Diamond Doral',
      status: 'confirmed',
      package: 'Platinum',
      coordinator: 'Maria Rodriguez',
      
      // Guest Information
      guestCount: 120,
      contractedGuests: 100,
      guestBreakdown: {
        adults: 80,
        teenagers: 20,
        kids: 20
      },
      
      // Financial Information
      totalAmount: 12495,
      paidAmount: 6247.50,
      remainingAmount: 6247.50,
      
      guestList: [
        { id: 1, name: 'Smith Family (4)', table: 1 },
        { id: 2, name: 'Johnson Family (3)', table: 1 },
        { id: 3, name: 'Williams Family (5)', table: 2 },
        { id: 4, name: 'Brown Family (4)', table: 2 },
        { id: 5, name: 'Davis Family (6)', table: 3 },
        { id: 6, name: 'Miller Family (3)', table: 4 },
        { id: 7, name: 'Wilson Family (4)', table: 4 },
        { id: 8, name: 'Moore Family (5)', table: 5 }
      ],
      
      // Customer Selections
      selections: {
        // Menu Selection
        menu: {
          type: 'premium',
          name: 'Premium Menu',
          appetizer: 'Shrimp Cocktail',
          main: 'Filet Mignon',
          sides: ['Truffle Risotto', 'Grilled Asparagus'],
          dessert: 'Chocolate Lava Cake',
          specialRequests: 'Need 5 vegetarian meals and 3 gluten-free options',
          
          // Additional food options
          buffetSides: ['White Rice', 'Mashed Potatoes', 'Salad'],
          appetizers: ['Spring Rolls', 'Cheese Sticks', 'Bruschetta'],
          miniDesserts: {
            enabled: true,
            quantity: 120,
            flavors: 'Chocolate, Vanilla, Strawberry'
          }
        },
        
        // Cake Selection
        cake: {
          type: 'vanilla',
          name: 'Classic Vanilla',
          tiers: 3,
          servings: '100-120',
          customization: 'Names: John & Jane, Gold leaf decorations',
          customMessage: true,
          specialDecorations: true,
          additionalSheetCakes: false
        },
        
        decoration: {
          theme: 'elegant',
          name: 'Elegant Classic',
          colors: 'White and Gold',
          includes: ['Centerpieces', 'Uplighting', 'Draping', 'Stage Decor'],
          specialRequests: 'Extra flowers for photo area',
          decorationAreas: ['Stage', 'Lobby', 'Entrance', 'Dance Floor'],
          
          // Table Setup Details
          tableSetup: {
            type: 'mixed',
            description: 'Combination of round and rectangular tables',
            squareTables: 2,
            cocktailTables: 4,
            highTopTables: 3,
            sofaLounge: true,
            runnerColor: 'Gold',
            chargerColor: 'Silver',
            napkinColor: 'White',
            napkinRingColor: 'Gold',
            centerpieces: 'tallVase'
          }
        },
        
        // Table Layout
        tableLayout: {
          type: 'mixed',
          description: 'Combination of round and rectangular tables',
          headTable: 'Sweetheart table for 2',
          totalTables: 15,
          seatingChart: 'Completed - 120 guests assigned'
        },
        
        // Music Preferences
        music: {
          djService: true,
          liveMusic: false,
          genres: ['Pop', 'Rock', 'R&B', 'Latin', 'Electronic/Dance'],
          mustPlay: [
            'Ed Sheeran - Perfect',
            'Bruno Mars - Marry You',
            'John Legend - All of Me',
            'Classic Wedding Songs Mix'
          ],
          doNotPlay: [
            'Heavy Metal',
            'Explicit Lyrics',
            'Sad breakup songs'
          ],
          specialSongs: {
            entrance: 'Crazy in Love - Beyoncé',
            firstDance: 'Perfect - Ed Sheeran',
            cakeTime: 'Sugar - Maroon 5',
            lastDance: 'Time of My Life - Black Eyed Peas'
          },
          specialRequests: 'Father-daughter dance: My Girl - The Temptations'
        },
        
        // Photography/Videography
        mediaServices: {
          photography: true,
          videography: true,
          photoBooth: true,
          droneFootage: false,
          specialRequests: 'Focus on candid shots, less posed photos'
        },
        
        // Additional Services
        additionalServices: {
          crazyHour: true,
          fireworks: false,
          liveStreaming: false,
          childcare: false,
          robot: {
            enabled: true,
            time: '9:30 PM'
          },
          limousine: {
            enabled: true,
            time: '11:30 PM',
            address: '123 Main St, Miami, FL 33101'
          }
        }
      },
      
      // Customer Comments & Requests
      specialRequests: [
        {
          date: '2025-06-01',
          request: 'Grandmother is in wheelchair, need accessible seating',
          status: 'acknowledged'
        },
        {
          date: '2025-06-05',
          request: 'Want to do a surprise anniversary announcement during reception',
          status: 'planning'
        },
        {
          date: '2025-06-08',
          request: 'Can we add a chocolate fountain to our dessert options?',
          status: 'pending'
        }
      ],
      
      // Timeline
      timeline: {
        '2:00 PM': 'Vendor Setup Begins',
        '4:00 PM': 'Bridal Party Arrives',
        '5:45 PM': 'Guest Arrival',
        '6:00 PM': 'Ceremony Begins',
        '6:30 PM': 'Cocktail Hour',
        '7:30 PM': 'Reception Entry',
        '8:00 PM': 'Dinner Service',
        '9:00 PM': 'First Dance & Speeches',
        '9:30 PM': 'Dancing Opens / LED Robot Performance',
        '10:30 PM': 'Cake Cutting',
        '11:00 PM': 'Event Ends',
        '11:30 PM': 'Limousine Service'
      }
    },
    {
      id: 'EV2024002',
      customerName: 'Emily Chen',
      customerEmail: 'emily.chen@email.com',
      customerPhone: '(305) 555-5678',
      type: 'Corporate Event',
      date: '2025-07-20',
      time: '7:00 PM - 12:00 AM',
      venue: 'Crystal Hall',
      status: 'confirmed',
      package: 'Gold',
      coordinator: 'Carlos Mendez',
      
      guestCount: 80,
      contractedGuests: 80,
      guestBreakdown: {
        adults: 80,
        teenagers: 0,
        kids: 0
      },
      
      totalAmount: 8500,
      paidAmount: 4250,
      remainingAmount: 4250,
      
      guestList: [],
      
      selections: {
        menu: {
          type: 'classic',
          name: 'Classic Menu',
          appetizer: 'Caesar Salad',
          main: 'Grilled Chicken Breast',
          sides: ['Garlic Mashed Potatoes', 'Seasonal Vegetables'],
          dessert: 'Tiramisu',
          specialRequests: 'CEO is vegan, need special meal',
          buffetSides: ['White Rice', 'Salad'],
          appetizers: ['Spring Rolls', 'Cheese Sticks'],
          miniDesserts: {
            enabled: false
          }
        },
        
        cake: {
          type: 'chocolate',
          name: 'Corporate Logo Cake',
          tiers: 2,
          servings: '80-100',
          customization: 'Company logo in fondant',
          customMessage: true,
          specialDecorations: false,
          additionalSheetCakes: false
        },
        
        decoration: {
          theme: 'modern',
          name: 'Modern Corporate',
          colors: 'Company colors: Blue and Silver',
          includes: ['LED Centerpieces', 'Logo Projections', 'Modern Lighting'],
          specialRequests: 'Company banners in main entrance',
          decorationAreas: ['Stage', 'Entrance'],
          tableSetup: {
            type: 'round10',
            description: '8 round tables with 10 guests each',
            squareTables: 0,
            cocktailTables: 2,
            highTopTables: 0,
            sofaLounge: false,
            runnerColor: 'Blue',
            chargerColor: 'Silver',
            napkinColor: 'White',
            napkinRingColor: 'Silver',
            centerpieces: 'clearVase'
          }
        },
        
        tableLayout: {
          type: 'round10',
          description: '8 round tables with 10 guests each',
          headTable: 'VIP table for executives',
          totalTables: 8,
          seatingChart: 'In progress'
        },
        
        music: {
          djService: true,
          liveMusic: false,
          genres: ['Jazz', 'Smooth R&B', 'Light Pop'],
          mustPlay: ['Corporate playlist', 'Background jazz'],
          doNotPlay: ['Rap', 'Hard Rock'],
          specialSongs: {
            entrance: 'Company theme song',
            firstDance: '',
            cakeTime: '',
            lastDance: ''
          },
          specialRequests: 'Background music during dinner, upbeat after 9PM'
        },
        
        mediaServices: {
          photography: true,
          videography: false,
          photoBooth: true,
          specialRequests: 'Group photo of all employees'
        },
        
        additionalServices: {
          avEquipment: true,
          presentationScreens: true,
          wirelessMics: 3,
          robot: { enabled: false },
          limousine: { enabled: false }
        }
      },
      
      specialRequests: [
        {
          date: '2025-06-10',
          request: 'Need podium for CEO speech at 8:30 PM',
          status: 'confirmed'
        }
      ],
      
      timeline: {
        '5:00 PM': 'Setup & AV Check',
        '6:45 PM': 'Doors Open',
        '7:00 PM': 'Cocktail Reception',
        '8:00 PM': 'Dinner Service',
        '8:30 PM': 'CEO Welcome Speech',
        '9:00 PM': 'Awards Presentation',
        '9:30 PM': 'Dancing & Networking',
        '11:30 PM': 'Last Call',
        '12:00 AM': 'Event Ends'
      }
    }
  ]);

  // Handle modification approval/rejection
  const handleModification = (modId, action) => {
    setModifications(mods => 
      mods.map(mod => 
        mod.id === modId 
          ? { ...mod, status: action, processedBy: currentUser.name, processedDate: new Date().toISOString() }
          : mod
      )
    );
    
    // Update the event data if approved
    if (action === 'approved') {
      const modification = modifications.find(m => m.id === modId);
      if (modification) {
        setEvents(events => 
          events.map(event => {
            if (event.id === modification.eventId) {
              const updatedEvent = { ...event };
              
              // Update based on modification type
              switch (modification.field) {
                case 'guestCount':
                  updatedEvent.guestCount = parseInt(modification.newValue);
                  break;
                case 'menu':
                  updatedEvent.selections.menu.type = modification.newValue.toLowerCase().replace(' menu', '');
                  updatedEvent.selections.menu.name = modification.newValue;
                  break;
                case 'decoration':
                  updatedEvent.selections.decoration.name = modification.newValue;
                  break;
                case 'tableLayout':
                  updatedEvent.selections.tableLayout.description = modification.newValue;
                  break;
                case 'cake':
                  updatedEvent.selections.cake.name = modification.newValue;
                  break;
                default:
                  console.warn(`Unhandled modification field: ${modification.field}`);
                  break;
              }
              
              return updatedEvent;
            }
            return event;
          })
        );
      }
    }
  };

  // Send email to supplier
  const sendSupplierEmail = () => {
    if (emailComposition.to && emailComposition.subject && emailComposition.body) {
      alert(`Email sent to ${emailComposition.supplierName}!`);
      setEmailComposition({ to: '', subject: '', body: '', supplierName: '' });
    }
  };

  // Handle customer message response
  const sendMessageResponse = (messageId, response) => {
    setCustomerMessages(messages =>
      messages.map(msg =>
        msg.id === messageId
          ? {
              ...msg,
              status: 'responded',
              responses: [...msg.responses, {
                message: response,
                timestamp: new Date().toLocaleString(),
                author: currentUser.name
              }]
            }
          : msg
      )
    );
  };

  // Save event notes
  const saveEventNote = (eventId, note) => {
    setEventNotes(prevNotes => ({
      ...prevNotes,
      [eventId]: [
        ...(prevNotes[eventId] || []),
        {
          id: Date.now(),
          note,
          author: currentUser.name,
          timestamp: new Date().toISOString()
        }
      ]
    }));
  };

  // Calculate days until event
  const calculateDaysUntilEvent = (eventDate) => {
    const date = new Date(eventDate);
    const today = new Date();
    const diffTime = date - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  // Get pending modifications for an event
  const getEventModifications = (eventId) => {
    return modifications.filter(mod => mod.eventId === eventId && mod.status === 'pending');
  };

  // Render dashboard
  const renderDashboard = () => {
    const upcomingEvents = events.filter(e => new Date(e.date) >= new Date()).length;
    const pendingMods = modifications.filter(m => m.status === 'pending').length;
    const unreadMessages = customerMessages.filter(m => m.status === 'unread').length;

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Welcome back, {currentUser.name}!</h2>
          <p className="text-lg">You're logged in as {currentUser.role === 'manager' ? 'Manager' : 'Sales Representative'}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Calendar className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold">{upcomingEvents}</span>
            </div>
            <h3 className="font-semibold">Upcoming Events</h3>
            <p className="text-sm text-gray-600">Next 30 days</p>
          </div>

          {currentUser.role === 'manager' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <AlertCircle className="w-8 h-8 text-orange-500" />
                <span className="text-2xl font-bold">{pendingMods}</span>
              </div>
              <h3 className="font-semibold">Pending Approvals</h3>
              <p className="text-sm text-gray-600">Customer modifications</p>
            </div>
          )}

          {currentUser.role === 'salesperson' && (
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center justify-between mb-4">
                <MessageCircle className="w-8 h-8 text-green-500" />
                <span className="text-2xl font-bold">{unreadMessages}</span>
              </div>
              <h3 className="font-semibold">Unread Messages</h3>
              <p className="text-sm text-gray-600">Customer inquiries</p>
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold">{suppliers.length}</span>
            </div>
            <h3 className="font-semibold">Active Suppliers</h3>
            <p className="text-sm text-gray-600">Partner network</p>
          </div>
        </div>

        {/* Today's Events */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Upcoming Events This Week</h3>
          <div className="space-y-3">
            {events.slice(0, 3).map(event => (
              <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium">{event.customerName} - {event.type}</p>
                  <p className="text-sm text-gray-600">
                    {new Date(event.date).toLocaleDateString()} • {event.venue} • {event.guestCount} guests
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowEventDetails(true);
                    setActiveTab('events');
                  }}
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Render comprehensive event details
  const renderEventDetails = () => {
    if (!selectedEvent) return null;

    const daysUntil = calculateDaysUntilEvent(selectedEvent.date);
    const eventMods = getEventModifications(selectedEvent.id);

    return (
      <div className="space-y-6">
        <button
          onClick={() => setShowEventDetails(false)}
          className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
        >
          <ChevronUp className="w-4 h-4 rotate-90" />
          Back to Events List
        </button>

        {/* Event Header */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-6 rounded-lg">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold mb-2">{selectedEvent.type} - {selectedEvent.customerName}</h2>
              <p className="text-lg">Event ID: {selectedEvent.id}</p>
              <p>{new Date(selectedEvent.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
              <p>{selectedEvent.time}</p>
            </div>
            <div className="text-right">
              <p className="text-3xl font-bold">{daysUntil}</p>
              <p className="text-sm">days until event</p>
            </div>
          </div>
        </div>

        {/* Pending Modifications Alert */}
        {eventMods.length > 0 && currentUser.role === 'manager' && (
          <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
            <h3 className="font-semibold text-orange-800 mb-2 flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Pending Customer Modifications
            </h3>
            <div className="space-y-2">
              {eventMods.map(mod => (
                <div key={mod.id} className="flex items-center justify-between bg-white p-3 rounded">
                  <div>
                    <p className="font-medium">{mod.type}</p>
                    <p className="text-sm text-gray-600">
                      {mod.oldValue} → {mod.newValue} ({mod.priceImpact})
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleModification(mod.id, 'approved')}
                      className="text-green-600 hover:text-green-700"
                    >
                      <CheckCircle className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => handleModification(mod.id, 'rejected')}
                      className="text-red-600 hover:text-red-700"
                    >
                      <XCircle className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Main Event Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Basic Information */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Info className="w-5 h-5 text-blue-500" />
              Basic Information
            </h3>
            <div className="space-y-2 text-sm">
              <p><strong>Package:</strong> {selectedEvent.package}</p>
              <p><strong>Venue:</strong> {selectedEvent.venue}</p>
              <p><strong>Status:</strong> <span className="text-green-600">{selectedEvent.status}</span></p>
              <p><strong>Coordinator:</strong> {selectedEvent.coordinator}</p>
              <div className="pt-3 mt-3 border-t">
                <p><strong>Customer:</strong> {selectedEvent.customerName}</p>
                <p><strong>Email:</strong> {selectedEvent.customerEmail}</p>
                <p><strong>Phone:</strong> {selectedEvent.customerPhone}</p>
              </div>
            </div>
          </div>

          {/* Guest & Financial Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-green-500" />
              Guest & Payment Info
            </h3>
            <div className="space-y-3 text-sm">
              <div>
                <p><strong>Total Guests:</strong> {selectedEvent.guestCount}</p>
                <p><strong>Contracted:</strong> {selectedEvent.contractedGuests}</p>
                {selectedEvent.guestCount > selectedEvent.contractedGuests && (
                  <p className="text-orange-600 text-xs mt-1">
                    +{selectedEvent.guestCount - selectedEvent.contractedGuests} extra guests
                  </p>
                )}
                <div className="text-xs mt-2 p-2 bg-gray-50 rounded">
                  <p>Adults: {selectedEvent.guestBreakdown.adults}</p>
                  <p>Teenagers: {selectedEvent.guestBreakdown.teenagers}</p>
                  <p>Kids: {selectedEvent.guestBreakdown.kids}</p>
                </div>
              </div>
              <div className="pt-3 border-t">
                <p><strong>Total:</strong> ${selectedEvent.totalAmount.toLocaleString()}</p>
                <p className="text-green-600"><strong>Paid:</strong> ${selectedEvent.paidAmount.toLocaleString()}</p>
                <p className="text-orange-600"><strong>Balance:</strong> ${selectedEvent.remainingAmount.toLocaleString()}</p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              Event Timeline
            </h3>
            <div className="space-y-1 text-sm max-h-64 overflow-y-auto">
              {Object.entries(selectedEvent.timeline).map(([time, activity]) => (
                <div key={time} className="flex gap-2">
                  <span className="font-medium text-gray-600 w-20">{time}</span>
                  <span>{activity}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Customer Selections sections remain the same... */}
        {/* Menu Selection */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <UtensilsCrossed className="w-5 h-5 text-orange-500" />
            Menu Selection & Food Options
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium mb-2">{selectedEvent.selections.menu.name}</p>
              <div className="space-y-1 text-sm text-gray-600">
                <p><strong>Appetizer:</strong> {selectedEvent.selections.menu.appetizer}</p>
                <p><strong>Main:</strong> {selectedEvent.selections.menu.main}</p>
                <p><strong>Sides:</strong> {selectedEvent.selections.menu.sides.join(', ')}</p>
                <p><strong>Dessert:</strong> {selectedEvent.selections.menu.dessert}</p>
              </div>
            </div>
            <div className="space-y-3">
              {selectedEvent.selections.menu.specialRequests && (
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-medium text-sm mb-1">Special Dietary Requirements:</p>
                  <p className="text-sm text-gray-700">{selectedEvent.selections.menu.specialRequests}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Notes Section */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 text-orange-500" />
            Internal Notes
          </h3>
          
          <div className="mb-4">
            <div className="flex gap-2">
              <input
                type="text"
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                placeholder="Add internal note..."
                className="flex-1 p-2 border rounded-lg"
                onKeyPress={(e) => {
                  if (e.key === 'Enter' && newNote.trim()) {
                    saveEventNote(selectedEvent.id, newNote);
                    setNewNote('');
                  }
                }}
              />
              <button
                onClick={() => {
                  if (newNote.trim()) {
                    saveEventNote(selectedEvent.id, newNote);
                    setNewNote('');
                  }
                }}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add Note
              </button>
            </div>
          </div>

          {eventNotes[selectedEvent.id] && eventNotes[selectedEvent.id].length > 0 && (
            <div className="space-y-2">
              {eventNotes[selectedEvent.id].map(note => (
                <div key={note.id} className="p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm">{note.note}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {note.author} - {new Date(note.timestamp).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  // Render events list
  const renderEvents = () => {
    if (showEventDetails) {
      return renderEventDetails();
    }

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Event Management</h2>
        
        <div className="grid gap-6">
          {events.map(event => (
            <div key={event.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">{event.customerName} - {event.type}</h3>
                  <p className="text-gray-600">Event ID: {event.id}</p>
                  <p className="text-sm text-gray-500 mt-2">
                    {new Date(event.date).toLocaleDateString()} • {event.time} • {event.venue}
                  </p>
                  <p className="text-sm mt-1">
                    <span className="font-medium">Guests:</span> {event.guestCount} • 
                    <span className="font-medium ml-2">Package:</span> {event.package} • 
                    <span className="font-medium ml-2">Status:</span> 
                    <span className="text-green-600 ml-1">{event.status}</span>
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">
                    {calculateDaysUntilEvent(event.date)}
                  </p>
                  <p className="text-sm text-gray-600">days away</p>
                  <button
                    onClick={() => {
                      setSelectedEvent(event);
                      setShowEventDetails(true);
                    }}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"
                  >
                    View Details
                  </button>
                </div>
              </div>
              
              {getEventModifications(event.id).length > 0 && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-orange-600 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4" />
                    {getEventModifications(event.id).length} pending modification(s)
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  // Render modifications
  const renderModifications = () => {
    const pendingMods = modifications.filter(m => m.status === 'pending');
    const processedMods = modifications.filter(m => m.status !== 'pending');

    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Customer Modifications</h2>
        
        {pendingMods.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Pending Approvals</h3>
            <div className="grid gap-4">
              {pendingMods.map(mod => (
                <div key={mod.id} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{mod.type}</h4>
                      <p className="text-sm text-gray-600">
                        Event: {mod.eventId} - {mod.customerName}
                      </p>
                      <p className="text-sm mt-2">
                        <span className="font-medium">Change:</span> {mod.oldValue} → {mod.newValue}
                      </p>
                      <p className="text-sm text-gray-600">
                        Requested: {new Date(mod.date).toLocaleDateString()}
                      </p>
                      <p className="text-sm font-medium text-blue-600 mt-1">
                        Price Impact: {mod.priceImpact}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleModification(mod.id, 'approved')}
                        className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 flex items-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Approve
                      </button>
                      <button
                        onClick={() => handleModification(mod.id, 'rejected')}
                        className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 flex items-center gap-2"
                      >
                        <XCircle className="w-4 h-4" />
                        Reject
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {processedMods.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold mb-4">Processed Modifications</h3>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Event</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Change</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Processed By</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {processedMods.map(mod => (
                    <tr key={mod.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{mod.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{mod.eventId}</td>
                      <td className="px-6 py-4 text-sm">{mod.oldValue} → {mod.newValue}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          mod.status === 'approved' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                        }`}>
                          {mod.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">{mod.processedBy}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    );
  };

  // Render suppliers
  const renderSuppliers = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Supplier Management</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Supplier Directory</h3>
            <div className="space-y-3">
              {suppliers.map(supplier => (
                <div key={supplier.id} className="bg-white p-4 rounded-lg shadow-md">
                  <h4 className="font-semibold">{supplier.name}</h4>
                  <p className="text-sm text-gray-600">{supplier.type}</p>
                  <p className="text-sm">{supplier.email}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Last contact: {new Date(supplier.lastContact).toLocaleDateString()}
                  </p>
                  <button
                    onClick={() => setEmailComposition({
                      to: supplier.email,
                      subject: '',
                      body: '',
                      supplierName: supplier.name
                    })}
                    className="mt-2 text-blue-600 hover:text-blue-700 text-sm"
                  >
                    Send Email
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Compose Email</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {emailComposition.to ? (
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium mb-1">To: {emailComposition.supplierName}</p>
                    <p className="text-sm text-gray-600">{emailComposition.to}</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Subject</label>
                    <input
                      type="text"
                      value={emailComposition.subject}
                      onChange={(e) => setEmailComposition({...emailComposition, subject: e.target.value})}
                      className="w-full p-2 border rounded-lg"
                      placeholder="Email subject..."
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      value={emailComposition.body}
                      onChange={(e) => setEmailComposition({...emailComposition, body: e.target.value})}
                      className="w-full p-2 border rounded-lg h-32"
                      placeholder="Type your message..."
                    />
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={sendSupplierEmail}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Email
                    </button>
                    <button
                      onClick={() => setEmailComposition({ to: '', subject: '', body: '', supplierName: '' })}
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Select a supplier from the directory to compose an email
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Render messages
  const renderMessages = () => {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Customer Messages</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">Message Inbox</h3>
            <div className="space-y-3">
              {customerMessages.map(msg => (
                <div 
                  key={msg.id} 
                  className={`bg-white p-4 rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow
                    ${msg.status === 'unread' ? 'border-l-4 border-blue-500' : ''}`}
                  onClick={() => setSelectedMessage(msg)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-semibold">{msg.customerName}</h4>
                      <p className="text-sm text-gray-600">Event: {msg.eventId}</p>
                      <p className="text-sm mt-1">{msg.message.substring(0, 50)}...</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">{msg.timestamp}</p>
                      <span className={`text-xs px-2 py-1 rounded-full mt-1 inline-block
                        ${msg.status === 'unread' ? 'bg-blue-100 text-blue-700' : 
                          msg.status === 'read' ? 'bg-gray-100 text-gray-700' : 
                          'bg-green-100 text-green-700'}`}>
                        {msg.status}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Message Details</h3>
            <div className="bg-white p-6 rounded-lg shadow-md">
              {selectedMessage ? (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">{selectedMessage.customerName}</h4>
                    <p className="text-sm text-gray-600">Event: {selectedMessage.eventId}</p>
                    <p className="text-xs text-gray-500">{selectedMessage.timestamp}</p>
                  </div>
                  
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm">{selectedMessage.message}</p>
                  </div>

                  {selectedMessage.responses.length > 0 && (
                    <div className="space-y-2">
                      <h5 className="font-medium text-sm">Conversation History:</h5>
                      {selectedMessage.responses.map((resp, idx) => (
                        <div key={idx} className="p-3 bg-blue-50 rounded-lg">
                          <p className="text-sm">{resp.message}</p>
                          <p className="text-xs text-gray-600 mt-1">
                            {resp.author} - {resp.timestamp}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="space-y-2">
                    <label className="block text-sm font-medium">Reply:</label>
                    <textarea
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="w-full p-2 border rounded-lg h-24"
                      placeholder="Type your response..."
                    />
                    <button
                      onClick={() => {
                        if (replyText.trim()) {
                          sendMessageResponse(selectedMessage.id, replyText);
                          setReplyText('');
                        }
                      }}
                      className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Send Reply
                    </button>
                  </div>
                </div>
              ) : (
                <p className="text-gray-500 text-center py-8">
                  Select a message from the inbox to view details
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Main render content switch
  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return renderDashboard();
      case 'events':
        return renderEvents();
      case 'modifications':
        return renderModifications();
      case 'suppliers':
        return renderSuppliers();
      case 'messages':
        return renderMessages();
      default:
        return renderDashboard();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Diamond Venue Staff Portal</h1>
              <p className="text-sm text-gray-600">Internal Management System</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-gray-500">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="text-right">
                <p className="font-medium">{currentUser.name}</p>
                <p className="text-sm text-gray-600 capitalize">{currentUser.role}</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap
                ${activeTab === 'dashboard' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('events')}
              className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap
                ${activeTab === 'events' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Events
            </button>
            {currentUser.role === 'manager' && (
              <button
                onClick={() => setActiveTab('modifications')}
                className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === 'modifications' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Modifications
              </button>
            )}
            <button
              onClick={() => setActiveTab('suppliers')}
              className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap
                ${activeTab === 'suppliers' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
            >
              Suppliers
            </button>
            {currentUser.role === 'salesperson' && (
              <button
                onClick={() => setActiveTab('messages')}
                className={`py-4 px-1 border-b-2 transition-colors whitespace-nowrap
                  ${activeTab === 'messages' ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-500 hover:text-gray-700'}`}
              >
                Messages
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Role Switcher for Testing */}
      <div className="fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg border">
        <p className="text-sm font-medium mb-2">Test Role Switcher:</p>
        <div className="space-y-2">
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="role"
              checked={currentUser.role === 'manager'}
              onChange={() => setCurrentUser({...currentUser, role: 'manager'})}
            />
            Manager
          </label>
          <label className="flex items-center gap-2 text-sm">
            <input
              type="radio"
              name="role"
              checked={currentUser.role === 'salesperson'}
              onChange={() => setCurrentUser({...currentUser, role: 'salesperson'})}
            />
            Salesperson
          </label>
        </div>
      </div>
    </div>
  );
};

export default StaffPortal;