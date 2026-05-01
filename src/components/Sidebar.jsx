import React from 'react';
import { LayoutDashboard, MessageSquare, BookOpen, Settings, BookMarked, FileText } from 'lucide-react';
import { categoryData } from '../data/categoryData';

const Sidebar = ({ activeTab, setActiveTab, targetLanguage = 'en', userRole = 'it', userLevel = 'pre-intermediate' }) => {
  const levelLabel = categoryData.levels.find(l => l.id === userLevel)?.label || userLevel;
  const roleLabel = Object.values(categoryData.roles).flat().find(r => r.id === userRole)?.label || userRole;
  const navItems = [
    { id: 'guide', label: '使用說明', icon: BookOpen },
    { id: 'dashboard', label: '每日任務', icon: LayoutDashboard },
    { id: 'chat', label: '對話練習', icon: MessageSquare },
    { id: 'notebook', label: '生詞筆記', icon: BookOpen },
    { id: 'pattern-notebook', label: '句型筆記', icon: FileText },
    { id: 'patterns', label: '常用句型', icon: BookMarked },
    { id: 'settings', label: '設定與 API', icon: Settings }
  ];

  return (
    <aside className="glass-panel sidebar-container" style={{ 
      width: '260px', 
      margin: '16px', 
      display: 'flex', 
      flexDirection: 'column',
      padding: '24px 16px',
      position: 'relative'
    }}>
      <div className="sidebar-header" style={{ marginBottom: '40px', padding: '0 10px' }}>
        <h1 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>◆</span> 
          Multi-Lang Coach
        </h1>
        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px', marginLeft: '24px' }}>大數據語音教練</p>
      </div>

      <nav className="sidebar-nav" style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {navItems.map(item => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`glass-button ${isActive ? 'active' : ''}`}
              style={{
                justifyContent: 'flex-start',
                padding: '12px 16px',
                border: isActive ? '1px solid var(--accent-color)' : '1px solid transparent',
                borderRadius: '8px',
                background: isActive ? 'rgba(0, 240, 255, 0.1)' : 'transparent',
                color: isActive ? 'var(--accent-color)' : 'var(--text-secondary)'
              }}
            >
              <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />
              <span style={{ fontWeight: isActive ? 600 : 500 }}>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <div className="sidebar-footer" style={{ padding: '0 10px', marginTop: 'auto' }}>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
          程度：{levelLabel}<br/>
          主題：{roleLabel}
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
