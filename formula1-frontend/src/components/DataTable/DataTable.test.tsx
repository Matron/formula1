import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import DataTable from './DataTable';

describe('DataTable', () => {
    it ('renders table title', () => {
       
        render(<DataTable title='Test Table' columns={[]} data={[]} />);
        expect(screen.getByText('Test Table')).toBeInTheDocument();
        
    });
});
