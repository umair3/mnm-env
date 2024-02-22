using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.EntityFrameworkCore;
using web.Data;

namespace web.Pages_Web
{
    public class DeleteModel : PageModel
    {
        private readonly web.Data.WebContext _context;

        public DeleteModel(web.Data.WebContext context)
        {
            _context = context;
        }

        [BindProperty]
        public Approval Approval { get; set; } = default!;

        public async Task<IActionResult> OnGetAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var approval = await _context.Approval.FirstOrDefaultAsync(m => m.Id == id);

            if (approval == null)
            {
                return NotFound();
            }
            else
            {
                Approval = approval;
            }
            return Page();
        }

        public async Task<IActionResult> OnPostAsync(int? id)
        {
            if (id == null)
            {
                return NotFound();
            }

            var approval = await _context.Approval.FindAsync(id);
            if (approval != null)
            {
                Approval = approval;
                _context.Approval.Remove(Approval);
                await _context.SaveChangesAsync();
            }

            return RedirectToPage("./Index");
        }
    }
}
